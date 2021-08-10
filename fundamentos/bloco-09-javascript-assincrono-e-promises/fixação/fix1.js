const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return userFullName(userToReturn)
};

assert.strictEqual(getUser(), "Hello! My name is Ivan Ivanovich"); 
assert.strictEqual(getUser(), "Ivan is Russian");