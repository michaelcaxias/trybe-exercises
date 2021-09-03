import React from 'react'

class Input extends React.Component {
  render() {
    const {name, type} = this.props
    return (
      <fieldset>
        <input name={name} type={type}/>
      </fieldset>
    );
  }
}

export default Input;
