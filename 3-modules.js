//CommonJS, every file in node is a module (by default)
//Modules - Encapsulated code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
console.log(data)

/*sayHi('Hilla')
sayHi(names.anna)
sayHi(names.linda)*/