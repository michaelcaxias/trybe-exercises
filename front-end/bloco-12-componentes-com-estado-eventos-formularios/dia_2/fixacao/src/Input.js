import React from 'react';

class Input extends React.Component {
  render() {
    const { type, name } = this.props;
    return (
      <label>
        {name}:
        <input type={type} name={name} />
      </label>
    );
  }
}

export default Input;
