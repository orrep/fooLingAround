import { observable, computed, action } from "mobx";
import Content from "./Content";
import { IColumn, IRow, IColumnContent } from "../../../Types/application";

export default class Column implements IColumn {
    row: IRow;
    width:number;
    
    @observable content: IColumnContent[] = [];

    constructor(row : IRow, width: number){
        this.row = row;
        this.width = width;
    }

    // @action
    // Action(action : string, data? : any){
    //     switch(action){
    //         case "ADD":
    //             this.AddContent(data.hoverIndex, data.type);
    //         break;
    //         case "MOVE":

    //         break;

    //     }
    // }

    @action
    AddContent(index : number, type : string){
        const id = this.content.length;
        this.content.splice(index, 0, new Content(this, id, type));
    }

    @action
    MoveContent(content : IColumnContent){

    }
}