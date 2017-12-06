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
        let hoverStyle = (hoverActive || isDragging ? 
        {position: "absolute", top: 0, bottom: 0, right: 0, left: 0, outline: "2px solid"} : 
        {position: "absolute", top: 0, bottom: 0, right: 0, left: 0});

        return (
            <div style={{ position: "relative" }}>
             <div onMouseEnter={() => this.mouseEnter()} onMouseLeave={() => this.mouseLeave()} style={hoverStyle as any} >
                    {connectDragSource(<div>DRAG</div>)}
                        id: {row.id} 
                        <br/>
                        index: {row.index}
            </div>
                <div className="container" >
                    <div className="row" style={{ minHeight: 100 }}>
                        {row.columns.map((column, i) => { 
                            // return (<div key={i} className={`col-${columWidth}`}><div className="templateContent">DROP CONTENT HERE</div></div> )
                            return <Column key={i} rowIndex={row.index} columnRowIndex={i} column={column} />;
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
