'use strict';

describe('pingPong', function(){
  it('returns numbers up to the given number', function(){
    expect(pingPong(2)).to.eql([1, 2]);
  });

  it('returns numbers up to the given number, replacing multiples of 3 with ping', function(){
    expect(pingPong(3)).to.eql([1, 2, "ping"]);
  });

  it('returns numbers up to the given number, replacing multiples of 3 with ping and multiples of 5 with ping', function(){
    expect(pingPong(5)).to.eql([1, 2, 'ping', 4, 'pong']);
  });

  it('returns numbers up to the given number, replacing multiples of 3 with ping, multiples of 5 with ping and multiples of 15 with pingpong', function(){
    expect(pingPong(15)).to.eql([1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping', 'pong', 11, 'ping', 13, 14, 'pingpong']);
  });

  it('returns an error message if the given input is not a number', function(){
    expect(pingPong('number')).to.eql(['The number you entered is invalid. Please try using a different one.']);
  });

  it('returns an error message if the given number is smaller than 1', function(){
    expect(pingPong('number')).to.eql(['The number you entered is invalid. Please try using a different one.']);
  });

});