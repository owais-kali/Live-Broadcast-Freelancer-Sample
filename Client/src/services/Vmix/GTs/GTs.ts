import { env } from "src/configs/env";
import { SendAPIRequest } from "../Shortcuts/Shortcuts";
import { FileType, Input } from "../Shortcuts/Functions/Input";

export const ActiveGTs: Map<number, string> = new Map();

export async function LoadInGameGT(Path:string) {
    let input = new Input();
    let ft: string = FileType.Title;

    input.AddInput(ft, Path);
    await SendAPIRequest(input);
}

export async function UnLoadInGameGT(GT_Name:string) {
    let input = new Input();
    let ft: string = FileType.Title;

    input.RemoveInput(GT_Name);
    await SendAPIRequest(input);
}
