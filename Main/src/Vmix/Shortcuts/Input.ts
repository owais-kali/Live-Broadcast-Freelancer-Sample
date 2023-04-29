import { IApi } from "./Shortcuts";

export type FileType = {
    Title: "Title"
}

export class Input implements IApi{
    Function: string = "";
    Value: string = "";
    
    AddInput(FileType: string, FilePath: string){
        this.Function = "AddInput";
        this.Value = FileType + '|' + FilePath;
    }
}