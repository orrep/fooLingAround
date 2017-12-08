import { observable, computed, action } from "mobx";
import Content from "./Content";
import { IColumn, IRow, IColumnContent } from "../../../Types/application";

import {GenerateId, MoveObjectInArray} from "../utils";

export default class Column implements IColumn {
    id: number;
    row: IRow;
    width:number;
    
    @observable content: IColumnContent[] = [];

    constructor(row : IRow, id:number, width: number){
        this.row = row;
        this.width = width;
    }

    @action
    AddContent(index : number, type : string){
        this.content.splice(index, 0, new Content(this, GenerateId(), type));
    }

    @action
    MoveContent(index : number, targetColumn : IColumn, content : IColumnContent){
        if(targetColumn.row.id === content.column.row.id){
            if(targetColumn.id === content.column.id){
                MoveObjectInArray(targetColumn.content, )
            }else{

            }
        }
    }
}