describe('pingPong', function(){

 it('returns ping if number is divisible by 3', function(){
  expect(pingPong(3)).to.equal("ping");
 });

 it('returns pong if number is divisible by 5', function(){
  expect(pingPong(5)).to.equal("pong");
 });

 it('returns pingpong if number is divisible by both 3 and 5', function(){
  expect(pingPong(15)).to.equal("pingpong");
 });

 it('returns number if none of the above is true', function(){
  expect(pingPong(17)).to.equal(17);
 });

});