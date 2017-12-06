import * as React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import Row from '../Document/Row';
import { ContentTab, RowTab } from './SideBarTabs/Tabs';
import { IDocument } from '../../../Types/application';
import Document from '../Document/Document';



interface SidebarProps{
    document :IDocument;
}
interface SidebarState{
    selectedTab :Tabs;
}

const enum Tabs {
    CONTENT,
    ROW,
    BODY
}


export default class Sidebar extends React.Component<any,SidebarState>{

    constructor(props){
        super(props);
        this.state = {
            selectedTab: Tabs.ROW
        };
    }
    render(){
        const { document } = this.props;
        const { selectedTab } = this.state;
        return (
       
        <div style={{ background: "#fff", height: "100%" }}> <br/> <br/> <br/>
           <ul className="nav nav-tabs">
           <li className="nav-item">
             <a className={"nav-link" + (selectedTab === Tabs.CONTENT ? " active" : "")} href="#" onClick={() => this.switchTabView(Tabs.CONTENT)} >Content</a>
           </li>
           <li className="nav-item">
             <a className={"nav-link" + (selectedTab === Tabs.ROW ? " active" : "")} href="#" onClick={() => this.switchTabView(Tabs.ROW)}>Row</a>
           </li>
           <li className="nav-item">
             <a className={"nav-link" + (selectedTab === Tabs.BODY ? " active" : "")} href="#" onClick={() => this.switchTabView(Tabs.BODY)}>Body</a>
           </li>
         </ul>

        {selectedTab === Tabs.CONTENT && <ContentTab document={document} />} 
        {selectedTab === Tabs.ROW && <RowTab document={document} />}
        </div>);
    }

    switchTabView = (selectedTab : Tabs) => {
        this.setState({ selectedTab })
    }
}