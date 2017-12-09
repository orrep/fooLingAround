import * as React from "react";
import Document from './Editor/Document/Document';
import Sidebar from "./Editor/Panel/Sidebar";
import { IApplication } from "../Types/application";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


interface AppProps{
    app: IApplication;
}

@DragDropContext(HTML5Backend)
export default class App extends React.Component<AppProps, any> {
    render(){
        return (
        <div>
        <div className="app-sidebar">
                <Sidebar document={this.props.app.document} />
            </div>
            <div className="app-content">
                <Document document={this.props.app.document} />
            </div>
        </div>);
    }

}
