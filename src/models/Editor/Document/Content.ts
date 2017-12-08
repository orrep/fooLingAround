import { observable, action  } from "mobx";
import Row from "./Row";
import { IColumn, IColumnContent } from "../../../Types/application";


export default class Content implements IColumnContent {
    id:number;
    column:IColumn;
    type:string;

    constructor(column:IColumn, id : number, type : string){
        this.column = column;
        this.id = id;
        this.type = type;
    }
}