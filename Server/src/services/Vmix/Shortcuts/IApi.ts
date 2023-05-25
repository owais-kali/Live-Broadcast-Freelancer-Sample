import { GT_Settings } from "../GTs/GT_Settings";

export interface IApi {
  Function: string;

  /**Value for the Function */
  Value: string;

  /**
   * Name of the GT file example
   *  @constant InGameGT.ELIMINATION;
   * */
  Input: string;

  Duration: number;

  Mix: number;

  Title: string;
  Description1: string;
  Description2: string;
}
