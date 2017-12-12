export interface IApplication {
    document: IDocument;
} 

export interface IDocument {
    rows: IRow[];
}

export interface IRow{
    id:number;
    document: IDocument;
    index:number;
    columns: IColumn[];

    AddColumn(width : number);
}

export interface IColumn{
    id:number;
    width:number;
    row: IRow;
    content:IColumnContent[];

    AddContent(index : number, type : string);
    MoveContent(index : number, targetColumn : IColumn, content : IColumnContent);
}

interface IValues{
    [key: string]: any
}

export interface IColumnContent{
    id:number;
    column:IColumn;
    type: string;
    values?: IValues;
}