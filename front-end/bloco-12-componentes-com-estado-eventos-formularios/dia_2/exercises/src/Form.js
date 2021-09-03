import React from 'react';
import ComboBox from './ComboBox';
import Input from './Input';

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <Input name="name" type="text"/>
          <Input name="email" type="email"/>
          <Input name="cpf" type="text"/>
          <Input name="address" type="text"/>
          <Input name="city" type="text"/>
          <ComboBox />
        </fieldset>
      </form>
    );
  }
}

export default Form;