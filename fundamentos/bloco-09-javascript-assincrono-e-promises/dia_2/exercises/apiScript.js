// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const randomNumber = () => {
  let numbers = [];
  for (let index = 0; index < 10; index += 1) {
    numbers.push(Math.floor(Math.random() * 51) ** 2)
  }
  return numbers.reduce((acc, curr) => acc + curr);
}

const fetchJoke = () => {
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };
  
    fetch(API_URL, myObject)
      .then(response => response.json())
      .then(data => document.querySelector('#jokeContainer').innerHTML = data.joke)
};

const fetchPromisse = () => {
  return new Promise((resolve, reject) => {
    console.log(randomNumber());
    (randomNumber() <= 8000)? resolve() : reject();
  }).then(() => [2, 3, 5, 10].map((divNumber) => randomNumber() / divNumber))
  .then((arrayOfNumbers) => arrayOfNumbers.reduce((acc, curr) => acc + curr ))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

fetchPromisse()
window.onload = () => fetchJoke();