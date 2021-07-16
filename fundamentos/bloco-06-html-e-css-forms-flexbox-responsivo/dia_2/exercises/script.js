let stateOptions = document.querySelector('#state-options');
let stateInitials = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']; 
let states = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
let valueForms = document.querySelectorAll('.value')
let buttonSubmit = document.querySelector('#button')
let initialDate = document.querySelector('#datepicker')

for (let index = 0; index < states.length; index += 1) {
  let options = document.createElement('option');
  options.value = stateInitials[index];
  options.innerText = states[index];
  stateOptions.appendChild(options);
}

/* ---- Puxando valores dos formulários ----- */
buttonSubmit.addEventListener('click', function(event) {
  event.preventDefault()
  for (let item of valueForms) {
    console.log(item.name + ' = ' + item.value);
  }
});

/* -----Puxando Biblioteca PikaDay----- */

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});
