import React from 'react'
import './Button.css'

class Button extends React.Component {
  constructor() {
    super()
    this.submitForm = this.submitForm.bind(this)
    this.showFormValues = this.showFormValues.bind(this)
    this.state = {
      displayInfos: 'hidden',
    }
  }

  showFormValues() {
    const { infos } = this.props;
    const stateTitle = ['Nome', 'E-mail', 'CPF', 'Endereço', 'Cidade',
     'Estado', 'Tipo de Casa', 'Resumo do currículo', 'Cargo', 'Descrição do Cargo'];
    const stateValues =  Object.values(infos);
    return stateValues.map((element, index) => {
      return (
        <section>
          <h1>{stateTitle[index]}:</h1>
          <p>{element}</p>
        </section>
      )
    });
  }

  submitForm(event) {
    event.preventDefault()
    this.setState({
      displayInfos: 'show'
    })
  }
  
  render() {
    return (
      <section>
        <button onClick={this.submitForm}>Enviar</button>
        <section className={`forms-informations ${this.state.displayInfos}`}>
          {this.showFormValues()}
        </section>
      </section>
    );
  }
}

export default Button;
//Referencia ao toggle class no React https://stackoverflow.com/questions/36403101/toggle-class-in-react