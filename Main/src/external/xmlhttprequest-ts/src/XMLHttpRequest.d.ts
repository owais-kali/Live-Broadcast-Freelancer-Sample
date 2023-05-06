/// <reference types="node" />
/**
 * defines the node implementaton of the XMLHttpRequest object specs
 *
 * see: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 */
export declare class XMLHttpRequest {
    /**
     * constant representing the state an XMLHttpRequest is in after being constructed
     */
    static UNSENT: number;
    /**
     * constant representing the state an XMLHttpRequest is in after 'open' was called
     */
    static OPENED: number;
    /**
     * constant representing the state an XMLHttpRequest is in when all response headers have been received
     */
    static HEADERS_RECEIVED: number;
    /**
     * constant representing the state an XMLHttpRequest is in when either the data transfer has been completed or something went wrong
     */
    static LOADING: number;
    /**
     * constant representing the state an XMLHttpRequest is in when the response entity body is being received
     */
    static DONE: number;
    /**
     * constant representing the state an XMLHttpRequest is in after being constructed
     */
    UNSENT: number;
    /**
     * constant representing the state an XMLHttpRequest is in after 'open' was called
     */
    OPENED: number;
    /**
     * constant representing the state an XMLHttpRequest is in when all response headers have been received
     */
    HEADERS_RECEIVED: number;
    /**
     * constant representing the state an XMLHttpRequest is in when either the data transfer has been completed or something went wrong
     */
    LOADING: number;
    /**
     * constant representing the state an XMLHttpRequest is in when the response entity body is being received
     */
    DONE: number;
    /**
     * option to disable the builtin header blacklist
     *
     * IMPORTANT: this is not part of the XHR specs
     */
    disableHeaderCheck: boolean;
    /**
     * an EventHandler that is called whenever the readyState attribute changes
     */
    onreadystatechange?: () => any;
    /**
     * an EventHandler that is called whenever an abort occurs
     */
    onabort?: () => any;
    /**
     * an EventHandler that is called whenever an error occurs
     */
    onerror?: (err: Error) => any;
    /**
     * an EventHandler that is called whenever a request loads successfully
     */
    onload?: () => any;
    /**
     * an EventHandler that is called whenever a request finished
     */
    onloadend?: () => any;
    /**
     * an EventHandler that is called whenever a request starts to load
     */
    onloadstart?: () => any;
    /**
     * an EventHandler that is called whenever a timeout occurs
     */
    ontimeout?: (err: Error) => any;
    /**
     * stores the ready state of the request (see UNSENT, OPENED, HEADERS_RECEIVED, LOADING, DONE)
     */
    readyState: number;
    /**
     * the text received from a server following a request being sent
     */
    responseText: string;
    /**
     * usually contains a document instance of the parsed request result but since the dom isn't available in node, this is always null
     */
    responseXML: null;
    /**
     * the numerical status code of the response
     */
    status: number;
    /**
     * the text received from a server following a request being sent
     */
    statusText: string;
    /**
     * timeout in milliseconds after a request should time out
     */
    timeout: number;
    /**
     * indicates whether or not cross-site Access-Control requests should be made using credentials like authorization headers
     */
    withCredentials: boolean;
    /**
     * defines the default headers sent by our requests
     */
    private defaultHeaders;
    /**
     * error flag, used when errors occur or abort is called
     */
    private errorFlag;
    /**
     * list of headers that are not setable by the user according to the specs
     *
     * IMPORTNAT: this can optionally be disabled by setting disableHeaderCheck to true
     */
    private forbiddenRequestHeaders;
    /**
     * list of request methods that are not setable by the user according to the specs
     */
    private forbiddenRequestMethods;
    /**
     * stores the headers that are used for this request
     */
    private headers;
    /**
     * stores the headers that are used for this request with the name being lower-cased
     */
    private headersLowerCase;
    /**
     * stores the event listeners that have been set via the addEventListener method
     */
    private listeners;
    /**
     * stores a reference to the request object of node.js
     */
    private request?;
    /**
     * stores a reference to the response object of node.js
     */
    public response: string;
    /**
     * flag indicating if a request was sent already
     */
    private sendFlag;
    /**
     * stores the settings of this object which are set when calling "open"
     */
    private settings?;
    /**
     * stores the timer that is used for timeouts
     */
    timeoutTimer?: NodeJS.Timer;
    /**
     * Open the connection. Currently supports local server requests.
     *
     * @param method Connection method (eg GET, POST)
     * @param url URL for the connection.
     * @param async Asynchronous connection (optional - default is true)
     * @param user Username for basic authentication (optional)
     * @param password Password for basic authentication (optional)
     */
    open(method: string, url: string, async?: boolean, user?: string, password?: string): void;
    /**
     * disables or enables the check of allowed headers in the request
     *
     * IMPORTANT: this is not part of the W3C spec
     *
     * @param state Enable or disable header checking.
     */
    setDisableHeaderCheck(state: boolean): void;
    /**
     * sets a header for the request or appends the value if one is already set
     *
     * @param header header name
     * @param value header value
     */
    setRequestHeader(header: string, value: string): void;
    /**
     * returns all the response headers, separated by CRLF, as a string, or null if no response has been received
     *
     * @return a string with all response headers separated by CR+LF, or null if no response has been received
     */
    getAllResponseHeaders(): string | null;
    /**
     * gets a header from the server response.
     *
     * @return text of the header or null if it doesn't exist.
     */
    getResponseHeader(header: string): string | null;
    /**
     * gets a request header that was set in this instance
     *
     * IMPORTANT: this is not part of the W3C specs
     *
     * @return returns the request header or empty string if not set
     */
    getRequestHeader(name: string): string | undefined;
    /**
     * sends the request to the server.
     *
     * @param string data Optional data to send as request body.
     */
    send(data?: any): void;
    /**
     * aborts a request
     */
    abort(): void;
    /**
     * adds an event listener to the XMLHttpRequest - this is the preferred method of binding to events
     */
    addEventListener(event: string, callback: (xhr: XMLHttpRequest) => any): void;
    /**
     * removes an event callback that has been added with the addEventListener method.
     */
    removeEventListener(event: string, callback: (xhr: XMLHttpRequest) => any): void;
    /**
     * dispatches events, including the "on" methods and events attached using addEventListener
     */
    dispatchEvent(event: string, parameter?: any): void;
    /**
     * changes readyState and calls onreadystatechange
     */
    private setState(state);
    /**
     * called when a timeout is encountered
     */
    private handleTimeout(error);
    /**
     * called when an error is encountered
     */
    private handleError(error);
    /**
     * checks if the specified header is allowed
     */
    private isAllowedHttpHeader(header);
    /**
     * checks if the specified request method is allowed
     */
    private isAllowedHttpMethod(method);
}
