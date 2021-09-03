import React from 'react'

class Input extends React.Component {
  render() {
    const {name, type, inputText} = this.props
    return (
      <label>
        <p>{inputText}</p>
        <input name={name} type={type} required/>
      </label>
    );
  }
}

export default Input;
