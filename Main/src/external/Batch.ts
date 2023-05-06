import { Guid } from "guid-typescript";
import { XMLHttpRequest } from "@external/xmlhttprequest-ts";

/**
 * Encapsulates the HTTP response information
 */
export interface IResponse {
    httpStatus?: number,
    httpStatusText?: string,
    contentId?: string,
    data?: any,
    location?: string,
    entityId?: string,
    error?: any
}

/**
 * Encapsulates the individual and change set request information
 */
interface IRequest {
    compose: (baseUrl: string) => string | null
}

/**
 * Maps the abstrated HTTP method to the actual HTTP verb
 * 
 * @param {action} abstracted HTTP method
 */
const resolveValidHttpMethod = (action: BatchAction | ChangesetAction): string | undefined => {
    switch (action) {
        case "Get": return "GET";
        case "Create": return "POST";
        case "Update": return "PATCH";
        case "Delete": return "DELETE";
        case "Ref": return "PUT";
    }
}

/**
 * Utility class that provides methods to compose, execute and parse response of a batch operation
 */
export class Batch {
    private _batchId: string;
    private _requests: IRequest[] = [];

    /**
     * Constructor. Unique identifier of the batch is set i.e. batch_<unique identifier>
     *  
     * @param {_baseUrl} Service root URL to the instance Web API (e.g. https://<your-org>.crm6.dynamics.com/api/data/v9.1)
     */
    constructor(private _baseUrl: string) {
        this._batchId = `batch_${Guid.create()}`;
    }

    /**
     * Add individual requests of the batch to a collection
     * 
     * @param {request} Two possible requests - Get or Change set requests
     */
    addRequest(request: IRequest) {
        this._requests.push(request);
    }

    /**
     * Provides a way to force a boundary for consecutive change sets
     */
    forceBoundary() {
        this._requests.push({compose: () => null});
    }

    /**
     * Iterates the request collection to compose the batch request body
     */
    composeBody(): string {
        const content: string[] = [];
        let changesetComposer = null;

        for (let i = 0; i < this._requests.length; i++) {
            const request = this._requests[i];

            if (request instanceof ChangesetRequest) {
                if (changesetComposer == null) {
                    changesetComposer = new ChangesetComposer(this._baseUrl);
                }

                changesetComposer.addRequest(request);

                if ((i !== this._requests.length - 1 && !(this._requests[i + 1] instanceof ChangesetRequest)) || i === this._requests.length - 1) {
                    const body = changesetComposer.compose();
                    if (body) {
                        content.push(`--${this._batchId}`);
                        content.push(body);
                    }
                    changesetComposer = null;
                }

            } else if (request instanceof BatchRequest) {
                const body = request.compose(this._baseUrl);
                if (body) {
                    content.push(`--${this._batchId}`);
                    content.push(body);
                }
            }
        }

        if (content.length > 0) {
            content.push(`--${this._batchId}--`);
        }

        return content.join("\n");
    }

    /**
     * Executes the batch request as an asynchronous operation
     */
    execute(): Promise<IResponse[]> {
        return new Promise<IResponse[]>((resolve, reject) => {

            const xhr = new XMLHttpRequest();
            xhr.open("POST", encodeURI(`${this._baseUrl}/$batch`), true);
            xhr.setRequestHeader("Content-Type", `multipart/mixed;boundary=${this._batchId}`);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("OData-MaxVersion", "4.0");
            xhr.setRequestHeader("OData-Version", "4.0");

            xhr.onload = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(this.resolveResponse(xhr.response));
                    } else {
                        reject(this.rejectResponse(xhr.status, xhr.statusText, xhr.response));
                    }
                }
            };

            xhr.send(this.composeBody());
        });
    }

    /**
     * Returns one-to-one responses of the individual requests in the batch
     * 
     * @param {responseBody} Serialized success response content
     */
    resolveResponse(responseBody: string): IResponse[] {
        return this.parseResponseBody(responseBody);
    }

    /**
     * Return error responses
     * 
     * @param {responseBody} Serialized failed response content
     */
    rejectResponse(httpStatus: number, httpStatusText: string, responseBody: string): IResponse[] {
        const results = this.parseResponseBody(responseBody) || [];
        if (results.length == 0) {
            const response: IResponse = {
                httpStatus: httpStatus,
                httpStatusText: httpStatusText,
                error: responseBody
            };
            results.push(response);
        }
        return results;
    }

    /**
     * Parses the batch response body to more easily consumed IResponse collection
     * 
     * @param {responseBody} Batch response body
     */
    parseResponseBody(responseBody: string): IResponse[] {
        if (responseBody == null) return [];

        const results: IResponse[] = [];
        const boundaryIdentifier = responseBody.substr(0, responseBody.indexOf("\r\n"));
        const responses = responseBody.split(boundaryIdentifier)
            .map(r => r.trim())
            .filter(b => b.length != 0 && b != "--");

        for (let i = 0; i < responses.length; i++) {
            const changesetResponseIndex = responses[i].indexOf("--changesetresponse");
            if (changesetResponseIndex > -1) {
                this.parseResponseBody(responses[i].substr(changesetResponseIndex)).map(r => results.push(r));
            }
            else {
                const httpStatusMatch = /HTTP\/[^\s]*\s+(\d{3})\s+([\w\s]*)/i.exec(responses[i]);
                if (httpStatusMatch) {
                    const response: IResponse = {};
                    response.httpStatus = parseInt(httpStatusMatch[1]);
                    response.httpStatusText = httpStatusMatch[2]?.split(`\r\n`).join(" ");

                    if (response.httpStatus == 200) {
                        const dataStartIndex = responses[i].indexOf("{");
                        const dataLastIndex = responses[i].lastIndexOf("}");
                        if (dataStartIndex > -1 && dataLastIndex > -1) {
                            response.data = JSON.parse(responses[i].substr(dataStartIndex, dataLastIndex + 1));
                        }
                    } else {
                        const contentIdMatch = /Content-ID\:\s*([\w\d]*)/i.exec(responses[i]);
                        if (contentIdMatch) {
                            response.contentId = contentIdMatch[1];
                        }

                        if (response.httpStatus < 400) {
                            const locationMatch = /Location\:\s*(.*)/i.exec(responses[i]);
                            if (locationMatch) {
                                response.location = locationMatch[1];
                            }

                            const entityIdMatch = /OData-EntityId\:\s*(.*)/i.exec(responses[i]);
                            if (entityIdMatch) {
                                const guidMatch = /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/.exec(entityIdMatch[1]);
                                if (guidMatch) {
                                    response.entityId = guidMatch[0];
                                }
                            }
                        }

                        if (response.httpStatus >= 400) {
                            const errorStartIndex = responses[i].indexOf("{");
                            const errorLastIndex = responses[i].lastIndexOf("}");
                            if (errorStartIndex > -1 && errorLastIndex > -1) {
                                response.error = JSON.parse(responses[i].substr(errorStartIndex, errorLastIndex + 1));
                            }
                        }
                    }

                    results.push(response);
                }
            }
        }

        return results;
    }
}

/**
 * Utility class that represents the individual request that makes up a batch
 */
type BatchAction = "Get";
export class BatchRequest implements IRequest {

    /**
     * Constructor
     * 
     * @param {_action} Only GET HTTP verb is allowed 
     * @param {_requestUri} Resouce Uri that identifies the resource (e.g. accounts, contacts) 
     * @param {_includeAnnotations} Indicator to use odata.include-annotations preference header 
     */
    constructor(
        private _action: BatchAction,
        private _requestUri: string,
        private _includeAnnotations?: boolean) { }

    /**
     * Composes the text content of the individual request in a batch
     * 
     * @param {baseUrl} Service root URL to the instance Web API 
     */
    compose(baseUrl: string): string | null {
        const httpMethod = resolveValidHttpMethod(this._action);
        if (httpMethod == undefined) return null;

        const content: string[] = [];
        content.push("Content-Type: application/http");
        content.push("Content-Transfer-Encoding:binary\n");
        content.push(`${httpMethod} ${baseUrl}/${this._requestUri} HTTP/1.1`);
        content.push("Accept: application/json");
        if (this._includeAnnotations) {
            content.push('Prefer: odata.include-annotations="*"');
        }
        content.push("");
        return content.join("\n");
    }
}

/**
 * Utility class that represents the change set
 */
export class ChangesetComposer {
    private _changesetId: string;
    private _collection: ChangesetRequest[] = [];

    /**
     * Constructor. Unique identifier of the change set is set i.e. changeset_<unique identifier>
     *  
     * @param {_baseUrl} Service root URL to the instance Web API
     */
    constructor(private _baseUrl: string) {
        this._changesetId = `changeset_${Guid.create()}`;
    }

    /**
     * Add individual change set request of the change set to a collection
     * 
     * @param {request} Change set request
     */
    addRequest(request: ChangesetRequest) {
        this._collection.push(request);
    }

    /**
     * Composes the text content of the change set
     * 
     * @param {baseUrl} Service root URL to the instance Web API 
     */
    compose(): string | null {
        const content: string[] = [];
        this._collection.map((request: ChangesetRequest) => {
            const body = request.compose(this._baseUrl);
            if (body) {
                content.push(`--${this._changesetId}`);
                content.push(body);
            }
        })

        if (content.length === 0) return null;

        content.unshift(`Content-Type: multipart/mixed;boundary=${this._changesetId}\n`);
        content.push(`--${this._changesetId}--\n`);

        return content.join("\n");
    }
}

/**
 * Utility class that represents the change set request in a change set
 */
type ChangesetAction = "Create" | "Update" | "Delete" | "Ref";
export class ChangesetRequest implements IRequest {

    /**
     * Constructor
     * 
     * @param {_action} Only POST|PATCH|DELETE|PUT HTTP verbs are allowed 
     * @param {_requestUri} Resouce Uri that identifies the resource (e.g. accounts, contacts) 
     * @param {_requestObject} JSON object for the request
     * @param {_contentId} Unique request identifier within change set
     */
    constructor(
        private _action: ChangesetAction,
        private _requestUri: string,
        private _requestObject: any,
        private _contentId: number) {
    }

    /**
     * Composes the text content of the change set request in a change set
     * 
     * @param {baseUrl} Service root URL to the instance Web API 
     */
    compose(baseUrl: string): string | null {
        const httpMethod = resolveValidHttpMethod(this._action);
        if (httpMethod == undefined) return null;

        const content: string[] = [];
        content.push("Content-Type: application/http");
        content.push("Content-Transfer-Encoding:binary");
        content.push(`Content-ID: ${this._contentId}\n`);
        content.push(`${httpMethod} ${baseUrl}/${this._requestUri} HTTP/1.1`);
        content.push("Content-Type: application/json;type=entry\n");
        content.push(JSON.stringify(this._requestObject));
        return content.join("\n");
    }
}