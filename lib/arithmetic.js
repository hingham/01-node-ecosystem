'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a,b) {

  if(arguments.length === 0){ return 0;}
  if(arguments.length === 1 && typeof a === 'number'){ return a + 0; }
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }

  return a+b;
};

arithmetic.subtract = function (a,b) {

  if(arguments.length === 0 ){ return 0;}
  if(arguments.length ===1 && typeof a ==='number'){return a - 0;}
  if(typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  
  return a-b;
};

arithmetic.multiply = function (a,b){
  if(arguments.length === 0 ){ return 0;}

  if(arguments.length === 1 && (typeof a === 'number')){ return a * 0;}
  if(typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a * b;
}

arithmetic.divide = function (a,b){
  if(arguments.length === 0 ){ return 0;}
  if(arguments.length === 1 && (typeof a === 'number')){ return undefined;}
  if(typeof a !== 'number' || typeof b !== 'number' ) { return null;}

  return a / b;
}


//function to decrease repitition
// function calc(len, a, b, cal){
//   if(len === 0){ return 0;}
//   if(len === 1 && typeof a === 'number'){ return cal; }
//   if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
// }
