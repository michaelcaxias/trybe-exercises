import React from 'react'

class Input extends React.Component {
  render() {
    const {name, type, id, value, inputText, funct} = this.props
    return (
      <label htmlFor={id}>
        <p>{inputText}</p>
        <input
        onChange={funct}
        name={name}
        id={id}
        type={type}
        value={value}
        required/>
      </label>
    );
  }
}

export default Input;
