import { observable, action  } from "mobx";
import Row from "./Row";
import Column from "./Column";


export default class Content {
    id:number;
    column:Column;
    type:string;

    constructor(column:Column, id : number, type : string){
        this.column = column;
        this.id = id;
        this.type = type;
    }
}