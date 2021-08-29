import React, { Component } from "react";
import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import axios from "axios";

import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class EditorConvertToHTML extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: "",
      title: "",
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
    console.log(this.state.title);
  };

  handlleSubmit = async (event) => {
    event.preventDefault();
    const htmlOfDescription = draftToHtml(
      convertToRaw(this.state.editorState.getCurrentContent())
    );

    const response = await axios.post(
      "http://18.219.85.59:3001/api/blog/create",
      {
        title: this.state.title,
        description: htmlOfDescription,
      }
    );

    console.log(
      draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    );
  };

  render() {
    const { editorState, title } = this.state;
    return (
      <form onSubmit={this.handlleSubmit}>
        <div className="field-item">
            <label>Title</label>
            <input type="text" value={title} onChange={this.onTitleChange} />
          </div> 
          <div className="field-item">
            <label>Service Detail</label>
            <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
          </div>

        
        
        <button type="submit">Submit</button>
      </form>
    );
  }
}
