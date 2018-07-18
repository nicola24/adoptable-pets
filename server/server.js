const express = require('express');
const request = require('request');

// const { apiKey } = require('./token.js');
const { url, format } = require('./pet-finder.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('dist'));

// return a list of animals filtered by animal type and zipcode location
app.get('/petbasicfind/:animal/:zipcode/:count', (req, res) => {
  const { animal, zipcode, count } = req.params;

  const options = {
    url: [
      `${url}pet.find?${format}`,
      `key=${process.env.API_KEY}`,
      `animal=${animal}`,
      `location=${zipcode}`,
      `count=${count}`,
    ].join('&'),
  };

  request(options).pipe(res);
});

// return a list of the breed for a specific type of animal
app.get('/breedlist/:animal', (req, res) => {
  const { animal } = req.params;

  const options = {
    url: [
      `${url}breed.list?${format}`,
      `key=${process.env.API_KEY}`,
      `animal=${animal}`,
    ].join('&'),
  };

  request(options).pipe(res);
});

// return a list of animals filtered by animal type, zipcode, breed, gender, size, age
app.get('/petfullfind/:animal/:zipcode/:breed/:sex/:age/:size/:count', (req, res) => {
  const {
    animal,
    zipcode,
    breed,
    sex,
    age,
    size,
    count,
  } = req.params;

  const options = {
    url: [
      `${url}pet.find?${format}`,
      `key=${process.env.API_KEY}`,
      `animal=${animal}`,
      `location=${zipcode}`,
      `breed=${breed}`,
      `sex=${sex}`,
      `age=${age}`,
      `size=${size}`,
      `count=${count}`,
    ].join('&'),
  };

  request(options).pipe(res);
});

app.listen(port, () => console.log(`*** App listening on port ${port}! ***`));
