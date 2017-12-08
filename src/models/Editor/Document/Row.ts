import { observable, action } from "mobx";
import Column from "./Column";
import Document from "./Document";
import { IColumn, IRow } from "../../../Types/application";

import {GenerateId} from "../utils";

export default class Row implements IRow {
    id: number;
    document: Document;
    @observable columns: IColumn[] = [];
    @observable index : number;

    constructor(document : Document, id : number, index : number){
        this.document = document;
        this.id = id;
        this.index = index;
    }

    @action
    AddColumn(width : number){
        this.columns.push(new Column(this, GenerateId(), width));
    }
}