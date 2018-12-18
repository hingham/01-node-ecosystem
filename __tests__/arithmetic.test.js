'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker')

let word = faker.lorem.word;

let num1 = faker.random.number();
let num2 = faker.random.number();

describe('Sum', () =>{

  it('requires both params to be numbers when parsed', () =>{
    let sum = arithmetic.add(word, 2);
    expect(sum).toEqual(null);
  });

  it('can sum any two numbers provided', () =>{
    let sum = arithmetic.add(num1, num2);
    expect(sum).toEqual(num1 + num2);
  });

  it('defaults inputs to 0', () =>{
    let sum = arithmetic.add(num1);
    expect(sum).toEqual(num1);
  });

  it('defaults return to be 0 if no arguments provided', () => {
    let sum = arithmetic.add();
    expect(sum).toEqual(0);
  });

});

describe('Subtract', () =>{

  it('can subtract two numbers', () =>{
    let diff = arithmetic.subtract(num1, num2);
    expect(diff).toEqual(num1 - num2);
  })

  it('defaults to zero if there is no argument provided', () => {
    let diff = arithmetic.subtract(num1);
    expect(diff).toEqual(num1);
  })

  it('defaults to zero if not arguments provided', () =>{
    let diff = arithmetic.subtract();
    expect(diff).toEqual(0);
  })

  it('returns null if the an argument is not a number', () =>{
    let diff = arithmetic.subtract(num1, word);
    console.log(diff);
    expect(diff).toEqual(null);
  });

})

describe('Multiply', () => {
  it('can multiply two numbers', () =>{
    let product = arithmetic.multiply(num1, num2);
    expect(product).toEqual(num1 * num2);
  });

  it('defaults to zero if there is only one argument', () =>{
    let product = arithmetic.multiply(num1);
    expect(product).toEqual(0);
  })

  it('defaults to zero if there no arguments', () => {
    let product = arithmetic.multiply();
    expect(product).toEqual(0);
  })

  it('will return null if provided a non-number input', ()=>{
    let product = arithmetic.multiply(word, num1);
    expect(product).toEqual(null);
  })
})

describe('Quotient', () => {
  it('can divide two numbers', () =>{
    let quotient = arithmetic.divide(num1, num2);
    expect(quotient).toEqual(num1 / num2);
  });

  it('defaults to undefined if there is only one argument', () =>{
    let quotient = arithmetic.divide(num1);
    expect(quotient).toEqual(undefined);
  })

  it('defaults to zero if there are no arguments', () => {
    let quotient = arithmetic.divide();
    expect(quotient).toEqual(0);
  })

  it('will return null if provided a non-number input', ()=>{
    let quotient = arithmetic.divide(word, num1);
    expect(quotient).toEqual(null);
  })
})
