const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');
const md5 = require('md5');

const legacyList = require('./legacy.json');
const legacyImages = Object.keys(legacyList);

const hashList = {};
const promises = [];

const requestImage = (image) => (
  axios
  .get(`https://www.pokecord.com/assets/${image}.png`, { responseType: 'arraybuffer' })
  .then((response) => md5(new Buffer(response.data, 'binary').toString('base64')))
  .then((hash) => {
    hashList[hash] = legacyList[image];
  })
  .catch((error) => {
    console.log(`https://www.pokecord.com/assets/${image}.png`, chalk.red(error.message));
  })
);

legacyImages.forEach((image) => {
  promises.push(requestImage(image));
});

axios.all(promises)
.then(() => {
  fs.writeFile('hash.json', JSON.stringify(hashList), 'utf8', () => {
    console.log(chalk.green('hash.json has been generated.'));
  });
});
