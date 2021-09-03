import React from 'react'

class Input extends React.Component {
  render() {
    const {name, type, id, value, inputText} = this.props
    return (
      <label htmlFor={id}>
        <p>{inputText}</p>
        <input name={name} id={id} type={type} value={value} required/>
      </label>
    );
  }
}

export default Input;
