import * as React from "react";
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd';
import { DragAndDrop } from "../../../Constants/consts";
import { IRow } from '../../../Types/application';
import Column from "./Column";

function collect(connect, monitor){
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

const rowSource = {
    beginDrag(props, monitor, component) {
        return { index: props.row.index };
    }
}

interface IRowProps{
    row: IRow;
    connectDragSource?: any;
    isDragging?:boolean;
    connectDragPreview?:any;
}

@DragSource(DragAndDrop.ROW, rowSource, collect)
export default class Row extends React.Component<IRowProps, any>{
    constructor(props){
        super(props);
        this.state = {
            hoverActive: false
        };
    }

    render(){
        const { row, connectDragSource, isDragging, connectDragPreview  } = this.props;
        const { hoverActive } = this.state;
        const hoverState = hoverActive || isDragging ? " active": "";
       

        return (
            <div style={{ position: "relative" }}>
             <div className={"row-hover" + hoverState}  onMouseEnter={() => this.mouseEnter()} onMouseLeave={() => this.mouseLeave()} >
                    {connectDragSource(<div className="row-draghandle"><i className="fa fa-arrows" aria-hidden="true"></i></div>)}
                        id: {row.id} 
                        <br/>
                        index: {row.index}
            </div>
                <div className="container" >
                    <div className="row" style={{ minHeight: 100 }}>
                        {row.columns.map((column) => { 
                            return <Column key={column.id} column={column} />;
                        })}
                    </div>
                </div>
            </div>
           
        );
    }

    mouseEnter = () =>{
        this.setState({ hoverActive: true });
    }

    mouseLeave = () => {
        this.setState({ hoverActive: false });
    }

}
