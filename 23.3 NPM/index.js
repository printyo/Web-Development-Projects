// var generateName = require("sillyname");

import generateName from "sillyname";

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

import * as superheroes from "superheroes";

var superheroName = superheroes.randomSuperhero();
console.log(`I am ${superheroName}!`);
