import { IApi } from "@services/Vmix/Shortcuts/IApi";
import axios, { AxiosResponse } from "axios";

export class BatchAPI {
  Promises: Promise<AxiosResponse<any, any>>[];

  constructor(promises: Promise<AxiosResponse<any, any>>[]) {
    this.Promises = promises;
  }

  AddAPI(promise: Promise<AxiosResponse<any, any>>) {
    this.Promises.push(promise);
  }

  BatchExecute(): Promise<unknown> {
    let BatchExecutePromise = new Promise((resolve, reject) => {
      this.Promises.forEach((promise: Promise<any>) => {
        promise.then();
      });
      resolve({});
    });

    return BatchExecutePromise;
  }
}
