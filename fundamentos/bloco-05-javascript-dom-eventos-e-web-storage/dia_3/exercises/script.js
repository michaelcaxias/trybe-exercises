function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
/* ----Exercicio 1---- */
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function liDays() {
  let ul = document.querySelector('#days');
  for (let days of dezDaysList) {
    let li = document.createElement('li');
    li.className = 'day';
    li.innerText = days;
    ul.appendChild(li);
    if (days === 24 || days === 25 || days === 31) {
      li.classList.add('holiday');
    }
    if (days === 4 || days === 11 || days === 18 || days === 25) {
      li.classList.add('friday');
    }
  }
}
liDays()
/* ----Exercicio 2---- */
let stringFeriados = 'Feriados'
function holidaysButton(string) {
  let buttonFather = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = string;
  buttonFather.appendChild(button);
}
holidaysButton(stringFeriados)
/* ----Exercicio 3---- */ 

function styleHolidays() {
  let holidaysAttribute = document.querySelectorAll('.holiday');
  let button = document.querySelector('#btn-holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'rgb(12, 206, 12)';
  button.addEventListener('click', function() {
    for (let index = 0; index < holidaysAttribute.length; index++) {
      if (holidaysAttribute[index].style.backgroundColor === newColor) {
        holidaysAttribute[index].style.backgroundColor = backgroundColor
      }
      else {
        holidaysAttribute[index].style.backgroundColor = newColor;
      }
    }
  })
};
styleHolidays()
/* ----Exercicio 4---- */
let stringFriday = 'Sexta-feira'
function fridaysButton(string) {
  let buttonFather = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerText = string;
  buttonFather.appendChild(button);
}
fridaysButton(stringFriday)
/* ----Exercicio 5---- */
function changeFridayDay(fridaysArray){
  let fridaysList = document.querySelectorAll('.friday');
  let fridayButton = document.querySelector('#btn-friday');
  let newText = 'Sextou!'
  fridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridaysList.length; index++) {
      if (fridaysList[index].innerText !== newText) {
        fridaysList[index].innerText = newText;
      }
      else {
        fridaysList[index].innerText = fridaysArray[index];
      }
    }
  });
}
let dezFridays = [ 4, 11, 18, 25 ];
changeFridayDay(dezFridays)