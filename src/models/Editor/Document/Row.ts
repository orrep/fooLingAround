import { observable } from "mobx";
import { action } from "mobx/lib/api/action";
import Column from "./Column";

export default class Row {
    id: number;
    @observable columns: Column[] = [];
    @observable index : number;

    constructor(id, index, columns){
        this.id = id;
        this.index = index;

        columns.forEach(col => {
            this.columns.push(new Column(col, this));
        });
    }
}