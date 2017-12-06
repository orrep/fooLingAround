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

const rowSource = {
    beginDrag(props, monitor, component) {
        return { document: props.document, columns: props.columns };
    }
}


interface ITemplateRowProps{
    document: IDocument;
    columns: number[];
    connectDragSource?: any;
}

@DragSource(DragAndDrop.TEMPLATEROW, rowSource, collect)
class TemplateRow extends React.Component<ITemplateRowProps,any> {
    render(){
        const { columns, connectDragSource } = this.props

        return connectDragSource(<div className="row templateWrapper">{columns.map((columWidth, i) => { 
            return <div key={i} className={`col-${columWidth} templateColumn`}><div className="templateContent"></div></div> })
        }</div>);
    }
}


interface RowTabProps {
    document: IDocument;
}
export default class RowTab extends React.Component<RowTabProps, any> {
    

    render(){
        const { document } = this.props;
        return (
        <div className="row-tab">
            <TemplateRow document={document} columns={[12]} />
            <TemplateRow document={document} columns={[6,6]} />
            <TemplateRow document={document} columns={[4,4,4]} />
        </div>
    );
    }
}