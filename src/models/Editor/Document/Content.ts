import { observable, action  } from "mobx";
import Row from "./Row";
import Column from "./Column";


export default class Content {
    id:number;
    row:Row;
    column:Column;
    type:string;

    constructor(id : number, row: Row, column:Column, type : string){
        this.id = id;
        this.row = row;
        this.column = column;
        this.type = type;
    }
}