import * as React from "react";
import { DropTarget } from 'react-dnd';
import { DragAndDrop } from "../../../Constants/consts";
import Column from './Column';
import Content from '../../../models/Editor/Document/Content';
import { IColumn } from '../../../Types/application';


const columnTarget = {
    drop(props, monitor) {
        const hoverIndex = props.dropIndex
        const item = monitor.getItem();
        props.column.Action(item.action, { hoverIndex: hoverIndex, item: item } );
    }
  };

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

interface IColumnDropTargetProps{
    connectDropTarget?:any;
    isOver?:boolean;
    canDrop?:boolean;

    column: IColumn;
    dropIndex:number;
}

@DropTarget(DragAndDrop.COLUMN_CONTENT, columnTarget, collect)
export default class ColumnDropTarget extends React.Component<IColumnDropTargetProps,any> {

    render(){
        const { connectDropTarget, isOver, canDrop } = this.props;
        return connectDropTarget(<div><label className={canDrop ? "row-droptarget-active" : "row-droptarget"} data-name="Drag it here"></label></div>
        );
    }
}

