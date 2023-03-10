// IMPORTS //////////////////
const fs = require('fs');

// MAIN THREAD ////////////////
const breedDetailsFromFile = function (breed, func) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) func(data);
  });
};

module.exports = breedDetailsFromFile;

// // TEST CASE ///
// const printOutCatBreed = (breed) => {
//   console.log('Return Value: ', breed); 
// }
// breedDetailsFromFile('Bombay', printOutCatBreed);