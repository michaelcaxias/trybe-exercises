const PREVIOUS_COLOR = document.querySelector('#previous');
const NEXT_COLOR = document.querySelector('#next');
const RANDOM_COLOR = document.querySelector('#random-color');
const COLOR_VALUE = document.querySelector('#value');
const CONTAINER = document.querySelector('#container');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function newColor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

function reducer (state = ESTADO_INICIAL, action) {
  const colors = [...state.colors, action.color];
  switch (action.type) {
    case "PREVIOUS_COLOR":
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    case "NEXT_COLOR":
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case "RANDOM_COLOR":
      return {
        ...state,
        colors,
        index: colors.indexOf(action.color),
      };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

PREVIOUS_COLOR.addEventListener('click', () =>  store.dispatch({ type: 'PREVIOUS_COLOR' }))
NEXT_COLOR.addEventListener('click', () =>  store.dispatch({ type: 'NEXT_COLOR' }))
RANDOM_COLOR.addEventListener('click', () =>  store.dispatch({
  type: 'RANDOM_COLOR',
  color: newColor(),
}))

store.subscribe(() => {
  const { colors, index } = store.getState();
  COLOR_VALUE.innerText = colors[index];
  CONTAINER.style.backgroundColor = colors[index];
})
