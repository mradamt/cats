// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, whenDone) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (error) whenDone(undefined)
    else whenDone(data)
  });
};


module.exports = breedDetailsFromFile;