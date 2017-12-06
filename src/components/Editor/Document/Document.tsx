import * as React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import Row from "./Row";
import RowDrop from "./RowDrop";



@observer
export default class Document extends React.Component<any,any> {
    

    render(){

        let rowsElements = [];
        var dropIndex = 1;
        this.props.document.rows.forEach(row => {
            rowsElements.push(<Row key={row.id} row={row} />);
            rowsElements.push(<RowDrop key={"drop" + dropIndex} document={this.props.document} dropIndex={dropIndex} />);
            dropIndex++;
        });

        return (
        <div className="container-fluid">
            <RowDrop key={"drop" + 0} document={this.props.document} dropIndex={0} />
            {rowsElements.map(row => { return row; })}
        </div>);
    }
}
