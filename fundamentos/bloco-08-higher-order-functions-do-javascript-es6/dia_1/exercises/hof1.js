//toLowerCase ---> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

//replace ---> https://www.developintelligence.com/blog/2016/02/replace-spaces-underscores-javascript/

const employee = (nameEmployee) => {
  const eMail = () => `${nameEmployee.replace(' ', '_').toLowerCase()}@trybe.com`
  const object = {
    name: nameEmployee,
    email: eMail()
  }
  return object
};

const newEmployees = () => {
  const employees = {
    id1: employee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());