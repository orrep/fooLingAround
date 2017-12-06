import { observable, computed, action } from "mobx";
import Content from "./Content";
import Row from "./Row";

export default class Column {
    width:number;
    row: Row;
    @observable content: Content[] = [];

    constructor(width: number, row : Row){
        this.width = width;
        this.row = row;
    }

    @action
    AddContent(index : number, type : string){
        const id = this.content.length;
        this.content.splice(index, 0, new Content(id, this.row, this, type));
    }
}