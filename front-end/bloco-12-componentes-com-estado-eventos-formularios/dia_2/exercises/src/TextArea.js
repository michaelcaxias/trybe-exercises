import React from 'react'

class TextArea extends React.Component {
  render() {
    const { inputText, rows, cols, name } = this.props;
    return (
      <label>
        <p>{inputText}</p>
        <textarea name={name}
         cols={cols}
        rows={rows}
        required>

        </textarea>
      </label>
    );
  }
}

export default TextArea;
