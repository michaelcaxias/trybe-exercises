import React from 'react'
import states from './data'

class ComboBox extends React.Component {
  createOptions() {
    return states.map(({value, label}) => {
      return <option value={value}>{label}</option>
    })
  }

  render() {
    const { inputText } = this.props;
    return (
      <label>
        <p>{inputText}</p>
        <select required>
          {this.createOptions()}
        </select>
      </label>
    );
  }
}

export default ComboBox;
