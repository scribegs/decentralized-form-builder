import React, { Component } from "react";
import Form from "react-jsonschema-form";
import { repo } from "../lib/ipfs";

import CodeMirror from "react-codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: JSON.stringify(defaultSchema, null, 2),
      schema: defaultSchema
    };
  }

  // Properties

  _saveToIPFS = () => {
    repo.add(this.state.json)
    .then(resp => {
      let hash = resp[0].hash
      saveLocal(hash)
      alert('Saved')
    });
  };

  _updateForm = x => {
    this.setState({ json: x });

    try {
      this.setState({ schema: JSON.parse(x), invalidSchema: false });
    } catch (error) {
      this.setState({ invalidSchema: true });
    }
  };

  // Life cycle

  componentDidMount() {
    setCodeMirrorStyles();
  }

  render() {
    const { json, schema, invalidSchema } = this.state;

    return (
      <div id="composer" className="row">
        <div id="editor" className="col-sm-6" style={styles.editor}>
          <CodeMirror
            value={json}
            options={codeMirrorOptions}
            style={styles.codeMirror}
            onChange={this._updateForm}
          />
        </div>

        <div id="preview" className="col-sm-6">
          {invalidSchema && (
            <div className="alert alert-warning">Invalid Schema</div>
          )}
          {schema && <Form schema={schema} />}
          <hr />
          <div style={{ textAlign: "right" }}>
            <button onClick={this._saveToIPFS} className="btn btn-primary">
              Publish
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const defaultSchema = {
  title: "",
  description: "",
  type: "object",
  required: ["firstField"],
  properties: {
    firstField: {
      type: "string",
      title: "First Field"
    }
  }
};

const codeMirrorOptions = {
  mode: "javascript",
  lineNumbers: true,
  smartIndent: false,
  tabSize: 2,
  indentWithTabs: false
};

const styles = {
  editor: {
    border: "1px solid #EEE",
    padding: 0
  }
};

function setCodeMirrorStyles() {
  // Because accessing the styles are hard :D
  const cm = document.getElementsByClassName("CodeMirror")[0];
  cm.style.height = 500;
}

function saveLocal(hash) {
  const forms = JSON.parse(localStorage.getItem('forms')) || []
  const newForm = {
    createdAt: Date.now(),
    hash
  }
  const newRecord = JSON.stringify(forms.concat(newForm))
  localStorage.setItem('forms', newRecord)
}

export default FormBuilder;
