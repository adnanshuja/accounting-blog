import React, { Component } from "react";
import axios from "axios";

export default class EditorConvertToHTML extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      header1: "",
      description1: "",
      header2: "",
      description2: "",
      summary1: "",
      summary1Details: "",
      summary2: "",
      summary2Details: "",
    };
  }

  onTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  onDescription1Change = (event) => {
    this.setState({
      description1: event.target.value,
    });
  };

  onDescription2Change = (event) => {
    this.setState({
      description2: event.target.value,
    });
  };

  onHeader1Change = (event) => {
    this.setState({
      header1: event.target.value,
    });
  };

  onHeader2Change = (event) => {
    this.setState({
      header2: event.target.value,
    });
  };

  onSummary1Change = (event) => {
    this.setState({
      summary1: event.target.value,
    });
  };

  onSummary2Change = (event) => {
    this.setState({
      summary2: event.target.value,
    });
  };

  onSummary1DetailsChange = (event) => {
    this.setState({
      summary1Details: event.target.value,
    });
  };

  onSummary2DetailsChange = (event) => {
    this.setState({
      summary2Details: event.target.value,
    });
  };

  handlleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      "http://18.219.85.59:3001/api/service/create",
      {
        title: this.state.title,
        header1: this.state.header1,
        description1: this.state.description1,
        header2: this.state.header2,
        description2: this.state.description2,
        summary1: this.state.summary1,
        summary1Details: this.state.summary1Details,
        summary2Details: this.state.summary2Details,
        summary2: this.state.summary2,
      }
    );
  };

  render() {
    const {
      header1,
      header2,
      description1,
      description2,
      summary1,
      summary1Details,
      summary2,
      summary2Details,
      title,
    } = this.state;
    return (
      <form onSubmit={this.handlleSubmit}>
        <div className="field-item">
          <label>Title</label>
          <input type="text" value={title} onChange={this.onTitleChange} />
        </div>
        <div className="field-item">
          <label>Header 1</label>
          <input type="text" value={header1} onChange={this.onHeader1Change} />
        </div>
        <div className="field-item">
          <label>Header 1 Description</label>
          <textarea value={description1} onChange={this.onDescription1Change} />
        </div>
        <div className="field-item">
          <label>Header 2</label>
          <input type="text" value={header2} onChange={this.onHeader2Change} />
        </div>
        <div className="field-item">
          <label>Header 2 Description</label>
          <textarea value={description2} onChange={this.onDescription2Change} />
        </div>
        <div className="field-item">
          <label>Summary 1</label>
          <input
            type="text"
            value={summary1}
            onChange={this.onSummary1Change}
          />
        </div>
        <div className="field-item">
          <label>Summary 1 Description</label>
          <textarea
            value={summary1Details}
            onChange={this.onSummary1DetailsChange}
          />
        </div>
        <div className="field-item">
          <label>Summary 2</label>
          <input
            type="text"
            value={summary2}
            onChange={this.onSummary2Change}
          />
        </div>
        <div className="field-item">
          <label>Summary 2 Description</label>
          <textarea
            value={summary2Details}
            onChange={this.onSummary2DetailsChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
