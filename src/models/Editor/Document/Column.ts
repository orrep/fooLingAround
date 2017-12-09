import { observable, computed, action } from "mobx";
import Content from "./Content";
import { IColumn, IRow, IColumnContent } from "../../../Types/application";

import {GenerateId, MoveObjectInArray, TakeObjectFromArray, InsertObjectInArray} from "../utils";

export default class Column implements IColumn {
    id: number;
    @observable row: IRow;
    width:number;
    
    @observable content: IColumnContent[] = [];

    constructor(row : IRow, id:number, width: number){
        this.id = id;
        this.row = row;
        this.width = width;
    }

    @action
    AddContent(index : number, type : string){
        this.content.splice(index, 0, new Content(this, GenerateId(), type));
    }

    @action
    MoveContent(index : number, targetColumn : IColumn, content : IColumnContent){
        if(targetColumn.row.id === content.column.row.id && targetColumn.id === content.column.id){
            MoveObjectInArray(content, targetColumn.content, index);
        }else{
            TakeObjectFromArray(content, content.column.content);
            content.column.row = targetColumn.row;
            content.column = targetColumn;
            InsertObjectInArray(index, content, targetColumn.content);
        }
    }
}