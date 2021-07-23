
/* ---------- PARTE I ---------- */
const person = {
  name: 'Michael',
  age: 18,
}

function createObject(object, nameKey, value) {
  let key = nameKey;
  let ketValue = value;
  return object[nameKey] = value;
}
createObject(person, 'tipoCabelo', 'Cacheado');

console.log(person)