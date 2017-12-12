import * as React from "react";
import RichTextEditor from 'react-rte';
import { IColumnContent } from '../../../../Types/application';


interface TextContentProps{
    content: IColumnContent;
}

export default class TextContent extends React.Component<TextContentProps,any> {

    onChange = () =>{
    }

    render () {
        let { content } = this.props;
        return (
          <RichTextEditor
            value={(content.values && content.values.text ? RichTextEditor.createValueFromString(content.values.text) : RichTextEditor.createEmptyValue() )}
            onChange={this.onChange}
          />
        );
      }
}