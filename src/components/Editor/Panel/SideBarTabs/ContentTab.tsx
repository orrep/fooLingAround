import * as React from "react";
import { DragAndDrop } from "../../../../Constants/consts";
import { DragSource } from 'react-dnd';
import { IDocument } from '../../../../Types/application';



function collect(connect, monitor){
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

const columnContentSource = {
    beginDrag(props, monitor, component) {
        return { type: props.type };
    }
}

interface ITextContent{
    type:string;
    connectDragSource?: any;
}

@DragSource(DragAndDrop.COLUMN_CONTENT, columnContentSource, collect)
class Content extends React.Component<any,any>{

    render(){
        const { connectDragSource, type } = this.props;
        return connectDragSource(<div>{type}</div>)
    }
}



interface IContentTab{
    document: IDocument;
}
export default class ContentTab extends React.Component<IContentTab,any>{

    render(){
        const { document } = this.props;
        return(
        <div className="content-tab">
            <Content type="TEXT" />
            <Content type="IMAGE" />
        </div>
        );
    }
}