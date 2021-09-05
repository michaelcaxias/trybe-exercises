import React from 'react';
import ComboBox from './ComboBox';
import TextArea from './TextArea';
import Input from './Input';
import './Form.css'

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

    const takeValues = (event) => {
      const { target } = event;
      const { name } = target;
      const value = target.type === 'radio' ? target.checked : target.value;
      this.setState({
        [name]: value,
      })
    }

    return (
      <form>
        <fieldset>
          <Input funct={this.takeValues} inputText="Nome" name="name" type="text"/>
          <Input funct={this.takeValues} inputText="E-mail" name="email" type="email"/>
          <Input funct={this.takeValues} inputText="CPF" name="cpf" type="text"/>
          <Input funct={this.takeValues} inputText="Endereço" name="address" type="text"/>
          <Input funct={this.takeValues} inputText="Cidade" name="city" type="text"/>
          <ComboBox funct={this.takeValues} inputText="Estado"/>
          <section className="home-type">
            <Input funct={this.takeValues} inputText="Casa" name="home" id="house" type="radio"/>
            <Input funct={this.takeValues} inputText="Apartamento" name="home" id="apartment" type="radio"/>
          </section>
        </fieldset>
        <fieldset>
          <TextArea inputText="Resumo do Currículo"/>
          <TextArea inputText="Cargo"/>
          <Input funct={this.takeValues} inputText="Descrição do cargo" name="roleDescription" type="text"/>
        </fieldset>
      </form>
    );
  }
}

export default Form;