'use strict';

//funciton that takes in a string
//return the name with hello
//return null if input is not a string

//Prep our interface mechanism (module.exports)
module.exports = exports = {};


exports.greet = (str) => {
    if(typeof str !== 'string'){
        return null;
    }
  return 'hello ' + str;
};


