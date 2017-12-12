import * as React from "react";
import { findDOMNode } from 'react-dom'
import { DropTarget } from 'react-dnd';
import { DragAndDrop } from "../../../Constants/consts";
import { IColumnContent, IColumn } from '../../../Types/application';
import ColumnDropTarget from "./ColumnDropTarget";
import ContentWrapper from "./Content";



const ColumnContentTarget = {
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
}
@DropTarget([DragAndDrop.COLUMN_CONTENT, DragAndDrop.TEMPLATEROW], ColumnContentTarget, ColumnContentcollect)
export default class Column extends React.Component<IColumnContentDropTargetProps,any> {


    render(){
        const { column } = this.props;

        let columnContents = [];
        var columnDropIndex = 1;
        column.content.forEach(content => {
            columnContents.push(<ContentWrapper key={content.id} content={content}/>);
            columnContents.push(<ColumnDropTarget key={"drop" + columnDropIndex} column={column} dropIndex={columnDropIndex} />);
            columnDropIndex++;
        });


        return(
        <div className={`col-${column.width}`}>
            {columnContents.length !== 0 ? columnContents
            :
                <ColumnDropTarget column={column} dropIndex={0} noContent={true} />
            }
        </div>);
    }

}


