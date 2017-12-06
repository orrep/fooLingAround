export interface IApplication {
    document: IDocument;
} 

export interface IDocument {
    rows: IRow[];
}

export interface IRow{
    id:number;
    index:number;
    columns: IColumn[];
}

export interface IColumn{
    width:number;
    content:IColumnContent[];
}

export interface IColumnContent{
    id:number;
    row: IRow;
    column:IColumn;
    type: string;
    values: any[];
}