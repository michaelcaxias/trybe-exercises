import React from 'react';
import Input from './Input';

class Form extends React.Component {
  render() {
    return (
      <form>
        <Input name="name" type="text"/>
        <Input name="email" type="email"/>
        <Input name="cpf" type="number"/>
        <Input name="address" type="text"/>
        <Input name="city" type="text"/>
      </form>
    );
  }
}

export default Form;