import React from 'react'
import states from './data'

class ComboBox extends React.Component {
  createOptions() {
    return states.map(({value, label}) => {
      return <option value={value}>{label}</option>
    })
  }

  render() {
    return (
      <select>
        {this.createOptions()}
      </select>
    );
  }
}

export default ComboBox;
