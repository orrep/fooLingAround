import * as React from "react";
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd';
import { DragAndDrop } from "../../../Constants/consts";
import { IColumnContent, IColumn } from '../../../Types/application';

class Image extends React.Component<any,any>{

    render(){
        const { connectDragSource, isDragging, connectDragPreview  } = this.props;
        return (<div>IMAGE {connectDragSource(<div style={{ display: "inline-block" }} >DRAG</div>)}</div>)
    }
}

class Text extends React.Component<any,any>{
    render(){
        const { connectDragSource, isDragging, connectDragPreview  } = this.props;
        return (<div>TEXT  {connectDragSource(<div>DRAG</div>)}</div>)
    }
}



function collect(connect, monitor){
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

const rowSource = {
    beginDrag(props, monitor, component) {
        
        console.log("beginDrag");
        console.log(props.content);
        console.log(props.content.row);
        return { column: props.content.column, id: props.content.id, action: "MOVE"  };
    }
}

interface IContentWrapperProps{
    connectDragSource?: any;
    isDragging?: boolean;
    connectDragPreview?:any;

    content: IColumnContent;
}

@DragSource(DragAndDrop.COLUMN_CONTENT, rowSource, collect)
export default class ContentWrapper extends React.Component<IContentWrapperProps,any>{

    render(){
        const { connectDragSource, isDragging, connectDragPreview, content  } = this.props;

        return(this._getContentComponent(content, connectDragSource));
    }
_getContentComponent(content: IColumnContent, connectDragSource : any){
        switch(content.type){
            case "TEXT":
                return <Text key={content.id} connectDragSource={connectDragSource} />;
            case "IMAGE":
                return <Image key={content.id} connectDragSource={connectDragSource} />;
        }
    }
}

 