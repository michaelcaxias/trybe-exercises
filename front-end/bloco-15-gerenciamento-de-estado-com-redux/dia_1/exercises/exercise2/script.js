const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const NOME_UM = document.querySelector('#nome-1');
const SOBRENOME_UM = document.querySelector('#sobrenome-1');
const ENDERECO_UM = document.querySelector('#endereco-1');
const CIDADE_UM = document.querySelector('#cidade-1');

const NOME_DOIS = document.querySelector('#nome-2');
const SOBRENOME_DOIS = document.querySelector('#sobrenome-2');
const ENDERECO_DOIS = document.querySelector('#endereco-2');
const CIDADE_DOIS = document.querySelector('#cidade-2');

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case 'PESSOA_UM':
      return {
        ...state,
        nome: 'João',
        sobrenome: 'Santos Carvalho',
        endereco: 'Rua Pedro Alvares',
        cidade: 'Mato Grosso'
      }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case 'PESSOA_DOIS':
      return {
        ...state,
        nome: 'Brunão',
        sobrenome: 'Santana Alves',
        endereco: 'Av. Perimentral, 999',
        cidade: 'Belém'
      }
    default:
      return state;
  }
};

const reducersCombinados = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer,
})

const store = Redux.createStore(
  reducersCombinados,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  
  window.onload = () => {
    setTimeout(() => {
    store.dispatch({ type: 'PESSOA_UM' })
    store.dispatch({ type: 'PESSOA_DOIS' })
  }, 3000);
};

store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
  NOME_UM.innerHTML = meuPrimeiroReducer.nome
  NOME_DOIS.innerHTML = meuSegundoReducer.nome
  SOBRENOME_UM.innerHTML = meuPrimeiroReducer.sobrenome
  SOBRENOME_DOIS.innerHTML = meuSegundoReducer.sobrenome
  ENDERECO_UM.innerHTML = meuPrimeiroReducer.endereco
  ENDERECO_DOIS.innerHTML = meuSegundoReducer.endereco
  CIDADE_UM.innerHTML = meuPrimeiroReducer.cidade
  CIDADE_DOIS.innerHTML = meuSegundoReducer.cidade
})
