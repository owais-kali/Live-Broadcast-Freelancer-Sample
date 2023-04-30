import { IApi } from "./Shortcuts";

export const FileType = {
    Title: "Title"
}

export class Input implements IApi{
    Function: string = "";
    Value: string = "";
    
    AddInput(FileType: string, FilePath: string){
        this.Function = "AddInput";
        this.Value = FileType + '|' + FilePath;
    }

    RemoveInput(){
        
    }
}