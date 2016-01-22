describe('isValidNumber', function(){
  it('returns false if input is not a number', function(){
    expect(isValidNumber('three')).to.be.false;
  });

  it('returns false if input is a number but is smaller than 1', function(){
    expect(isValidNumber(-5)).to.be.false;
  });

  it('returns true if input is a valid number', function(){
    expect(isValidNumber(3)).to.be.true;
  });
});

describe('pingPong', function(){
  it('returns ping if number is divisible by 3', function(){
    expect(pingPong(3)).to.equal('ping');
  });

  it('returns pong if number is divisible by 5', function(){
    expect(pingPong(5)).to.equal('pong');
  });

  it('returns pingpong if number is divisible by both 3 and 5', function(){
    expect(pingPong(15)).to.equal('pingpong');
  });

  it('returns number if none of the above is true', function(){
    expect(pingPong(17)).to.equal(17);
  });
});