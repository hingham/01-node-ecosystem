'use strict'

const faker = require('faker');

const greeter = require('../lib/greet.js');

let name = faker.name.firstName();

describe('Greet', () =>{
  //test that expects the greet module to return null when you supply a non string
  it('requires a param to be a string', () =>{
    let message = greeter.greet(1);
    expect(message).toBeNull();
  });

  //test that expects the greet module to return 'hello world'

  it('prepends a string with hello', () =>{
    let message = greeter.greet('world');
    expect(message).toEqual('hello world');
  });

  it('it takes any name and prepends with hello', () =>{
    let message = greeter.greet(name);
    expect(message).toEqual('hello ' + name);
  })

});
