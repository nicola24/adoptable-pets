const express = require('express');
const request = require('request');

const router = express.Router();

// const { apiKey } = require('../token.js');
const apiKey = process.env.API_KEY; // heroku token

const url = 'http://api.petfinder.com/';
const format = 'format=json';

// return a list of animals filtered by animal type and zipcode location
router.route('/petbasicfind/:animal/:zipcode/:count').get((req, res) => {
  const { animal, zipcode, count } = req.params;

  const options = {
    url: [
      `${url}pet.find?${format}`,
      `key=${apiKey}`,
      `animal=${animal}`,
      `location=${zipcode}`,
      `count=${count}`,
    ].join('&'),
  };

  request(options).pipe(res);
});

// return a list of the breed for a specific type of animal
router.route('/breedlist/:animal').get((req, res) => {
  const { animal } = req.params;

  const options = {
    url: [
      `${url}breed.list?${format}`,
      `key=${apiKey}`,
      `animal=${animal}`,
    ].join('&'),
  };

  request(options).pipe(res);
});

// return a list of animals filtered by animal type, zipcode, breed, gender, size, age
router.route('/petfullfind/:animal/:zipcode/:breed/:sex/:age/:size/:count').get((req, res) => {
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
      `key=${apiKey}`,
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

module.exports = router;
