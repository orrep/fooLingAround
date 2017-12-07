import { observable, computed, action } from "mobx";
import Row from "./Row";
import Column from "./Column";


export default class Document {
    @observable rows : Row[] = [];

    @action
    AddRow(index :number, columnSpecs : number[]){
        const id = this.rows.length;
        const newRow = new Row(this, id, id);

        columnSpecs.forEach(colWidth => {
            newRow.AddColumn(colWidth);
        });

        this.rows.splice(index, 0, newRow);
    }

    @action
    MoveRow(oldIndex : number, newIndex : number){
        if(oldIndex == newIndex){
            return;
        }

        let newRowArr : Row[];
        if(oldIndex > newIndex){
            newRowArr = this.rows.map((row) => {
                    if(row.index >= newIndex && row.index < oldIndex){
                        row.index++;
                    }
                    else if(row.index === oldIndex){
                        row.index = newIndex;
                    }
                    return row;
                });
            }
        else{
            newRowArr = this.rows.map((row) => {
                if (row.index > oldIndex && row.index < newIndex){
                    row.index--;
                }
                else if(row.index === oldIndex){
                    row.index = newIndex - 1;
                }
                return row;
            });
        }

        this.rows = newRowArr.sort((a, b) => {
            return a.index < b.index ? -1 : a.index > b.index ? 1 : 0;
        });
    }
      
}
