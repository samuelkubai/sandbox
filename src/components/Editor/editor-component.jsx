import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';

import './editor-styles.css';

export default class Editor extends Component {
  state = {
    code: `function HelloWorld() {\n\tconsole.log('Hello World');\n\n\tif (true) { \n\t\tconsole.log('This is an IF statement'); \n\t}\n}\n\nHelloWorld();`
  };

  editor = React.createRef();

  componentDidMount() {
    this.markText({ start: 2, end: 5 });
  }

  markText = ({ start, end }) => {
    this.editor.current.getCodeMirror().markText({ line: start }, { line: end }, { className: 'c-editor__selected-text' });
  };

  onChange = (newValue) => {
    console.log("change", newValue);
  };

  render() {
    const { code } = this.state;
    return (
      <div className="c-editor">
        <CodeMirror
          autoFocus={true}
          className="c-editor__workspace"
          ref={this.editor}
          value={code}
          onChange={this.onChange}
          options={{
            lineNumbers: true,
            mode: 'javascript'
          }}
        />
      </div>
    );
  }
}
