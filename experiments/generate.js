const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');
const md5 = require('md5');

const legacyList = require('./legacy.json');
const legacyImages = Object.keys(legacyList);

const hashList = {};
const promises = [];

const requestImage = (pokemon, url) => (
  axios
  .get(url, { responseType: 'arraybuffer' })
  .then((response) => md5(new Buffer(response.data, 'binary').toString('base64')))
  .then((hash) => {
    hashList[hash] = pokemon;
  })
  .catch((error) => {
    console.log(url, chalk.red(error.message));
  })
);

legacyImages.forEach((image) => {
  promises.push(requestImage(legacyList[image], `https://www.pokecord.com/assets/${image}.png`));
});

const downloadList = {
  Hariyama: 'https://media.discordapp.net/attachments/445311229020602388/446042250623844363/PokecordSpawn.jpg',
  Noivern: 'https://media.discordapp.net/attachments/386324037552308224/445821210618757132/PokecordSpawn.jpg',
  Chingling: 'https://media.discordapp.net/attachments/445311229020602388/445805212683337747/PokecordSpawn.jpg',
};

Object.keys(downloadList).forEach((pokemon) => {
  promises.push(requestImage(pokemon, downloadList[pokemon]));
});

axios.all(promises)
.then(() => {
  fs.writeFile('pokemon.json', JSON.stringify(hashList), 'utf8', () => {
    console.log(chalk.green('pokemon.json has been generated.'));
  });
});
