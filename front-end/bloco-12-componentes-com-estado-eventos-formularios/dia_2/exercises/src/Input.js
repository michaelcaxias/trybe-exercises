import React from 'react'

class Input extends React.Component {
  render() {
    const {name, type} = this.props
    return (
      <input name={name} type={type} required/>
    );
  }
}

export default Input;
