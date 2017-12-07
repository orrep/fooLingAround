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
}

export interface IColumn{
    width:number;
    row: IRow;
    content:IColumnContent[];
}

export interface IColumnContent{
    id:number;
    column:IColumn;
    type: string;
    values: any[];
}