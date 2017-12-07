import { observable, computed, action } from "mobx";
import Content from "./Content";
import Row from "./Row";

export default class Column {
    row: Row;
    width:number;
    
    @observable content: Content[] = [];

    constructor(row : Row, width: number){
        this.row = row;
        this.width = width;
    }

    @action
    Action(action : string, data? : any){
        switch(action){
            case "ADD":
                this.AddContent(data.hoverIndex, data.type);
            break;
            case "MOVE":

            break;

        }
    }

    @action
    AddContent(index : number, type : string){
        const id = this.content.length;
        this.content.splice(index, 0, new Content(this, id, type));
    }
}