import React from 'react';
import ComboBox from './ComboBox';
import TextArea from './TextArea';
import Input from './Input';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      select: '',
      homeType: '',
    }
  }
  render() {
    return (
      <form>
        <fieldset>
          <Input inputText="Nome" name="name" type="text"/>
          <Input inputText="E-mail" name="email" type="email"/>
          <Input inputText="CPF" name="cpf" type="text"/>
          <Input inputText="Endereço" name="address" type="text"/>
          <Input inputText="Cidade" name="city" type="text"/>
          <ComboBox inputText="Estado"/>
          <Input inputText="Casa" name="home" id="house" type="radio"/>
          <Input inputText="Apartamento" name="home" id="apartment" type="radio"/>
        </fieldset>
        <fieldset>
          <TextArea inputText="Resumo do Currículo"/>
        </fieldset>
      </form>
    );
  }
}

export default Form;