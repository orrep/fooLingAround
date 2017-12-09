import * as React from "react";
import { DropTarget } from 'react-dnd';
import { DragAndDrop } from "../../../Constants/consts";
import { IDocument } from '../../../Types/application';


const rowTarget = {
    drop(props, monitor) {
        const hoverIndex = props.dropIndex

        switch(monitor.getItemType()){
            case DragAndDrop.ROW:{
                const dragIndex = monitor.getItem().index
                if (dragIndex === hoverIndex) {
                    return;
                }
                props.document.MoveRow(dragIndex, hoverIndex);
                return;
            }
            case DragAndDrop.TEMPLATEROW:{
                const columns = monitor.getItem().columns
                props.document.AddRow(hoverIndex, columns);
                return;
            }
        }
    }
  };

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

interface IRowDrop{
    connectDropTarget?:any;
    isOver?:boolean;
    canDrop?:boolean;

    document: IDocument;
    dropIndex:number;
}

@DropTarget([DragAndDrop.ROW, DragAndDrop.TEMPLATEROW], rowTarget, collect)
export default class RowDrop extends React.Component<IRowDrop,any> {

    render(){
        const { connectDropTarget, isOver, canDrop } = this.props;
        return connectDropTarget(<div><label className={canDrop ? "row-droptarget active" : "row-droptarget"} data-name="Drag it here"></label></div>
        );
    }
}

