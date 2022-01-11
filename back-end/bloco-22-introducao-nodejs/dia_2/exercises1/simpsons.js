const fs = require("fs");

const simpsonsJSON = "./simpsons.json";
// async
const main = async () => {
  const result = await fs.promises.readFile(simpsonsJSON, "utf8");
  const resolve = await JSON.parse(result);

  console.log(resolve);
  return resolve;
};

main();

// sync
const simpsonsSync = JSON.parse(fs.readFileSync(simpsonsJSON, "utf8"));
console.log(simpsonsSync);
