import * as React from "react";
import { DragSource, DropTarget } from 'react-dnd';
import { DragAndDrop } from "../../../Constants/consts";
import { IColumnContent, IColumn } from '../../../Types/application';
import TextContent from './ContentComponents/Text';

class Image extends React.Component<any,any>{

    render(){
        return (<div>IMAGE </div>)
    }
}

class Text extends React.Component<any,any>{
    render(){
        return (<div>TEXT</div>)
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
        return { content: props.content, action: "MOVE"  };
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
    constructor(props){
        super(props);
        this.state = {
            hoverActive: false
        };
    }
    
    render(){
        const { connectDragSource, isDragging, connectDragPreview, content  } = this.props;
        const { hoverActive } = this.state;
        const hoverState = hoverActive || isDragging ? " active": "";

        // return(<div>{this._getContentComponent(content, connectDragSource)}</div>);

        return(

            <div style={{ position: "relative" }}>
                <div className={"content-hover" + hoverState}  onMouseEnter={() => this.mouseEnter()} onMouseLeave={() => this.mouseLeave()} >
                        {connectDragSource(<div className="content-draghandle"><i className="fa fa-arrows" aria-hidden="true"></i></div>)}
                </div>
                {this._getContentComponent(content)}
            </div>
        );
    }
    _getContentComponent(content: IColumnContent){
        switch(content.type){
            case "TEXT":
                return <TextContent key={content.id} content={content} />;
            case "IMAGE":
                return <Image key={content.id}  />;
        }
    }

    mouseEnter = () =>{
        this.setState({ hoverActive: true });
    }

    mouseLeave = () => {
        this.setState({ hoverActive: false });
    }
}

 