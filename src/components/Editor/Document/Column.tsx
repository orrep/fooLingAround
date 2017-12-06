import * as React from "react";
import { findDOMNode } from 'react-dom'
import { DropTarget } from 'react-dnd';
import { DragAndDrop } from "../../../Constants/consts";
import { IColumnContent, IColumn } from '../../../Types/application';
import ColumnDropTarget from "./ColumnDropTarget";
import ContentWrapper from "./Content";



const ColumnContentTarget = {
    drop(props, monitor) {
        const rowIndex = props.rowIndex
        const columnRowIndex = props.columnRowIndex
        const columnIndex = props.columnIndex;

        console.log(props);
    }
  };

function  ColumnContentcollect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

interface IColumnContentDropTargetProps{
    column: IColumn;
    rowIndex:number;
    columnRowIndex:number;
}
@DropTarget([DragAndDrop.COLUMN_CONTENT, DragAndDrop.TEMPLATEROW], ColumnContentTarget, ColumnContentcollect)
export default class Column extends React.Component<IColumnContentDropTargetProps,any> {


    render(){
        const { column, rowIndex, columnRowIndex } = this.props;

        let columnContents = [];
        var columnDropIndex = 1;
        column.content.forEach(content => {
            columnContents.push(<ContentWrapper key={content.id} content={content}/>);
            columnContents.push(<ColumnDropTarget key={"drop" + columnDropIndex} column={column} dropIndex={columnDropIndex} />);
            columnDropIndex++;
        });


        return(
        <div className={`col-${column.width}`}>
            <ColumnDropTarget column={column} dropIndex={0} />
            {columnContents}
        </div>);
    }

}


