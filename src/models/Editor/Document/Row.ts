import { observable, action } from "mobx";
import Column from "./Column";
import Document from "./Document";
export default class Row {
    id: number;
    document: Document;
    @observable columns: Column[] = [];
    @observable index : number;

    constructor(document : Document, id : number, index : number){
        this.document = document;
        this.id = id;
        this.index = index;
    }

    @action
    AddColumn(width : number){
        this.columns.push(new Column(this, width));
    }
}