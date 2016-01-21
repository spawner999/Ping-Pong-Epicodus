describe('pingPong', function(){
 it("returns ping if number is divisible by 3", function(){
  expect(pingPong(6)).to.equal("ping");
 });
 it("returns pong if number is divisible by 5", function(){
  expect(pingPong(10)).to.equal("pong");
 });
 it("returns pingpong if number is divisible by both 3 and 5", function(){
  expect(pingPong(30)).to.equal("pingpong");
 });
 it("returns error if number is not a number", function(){
 	expect(pingPong('ji')).to.equal("error");
 });
 it("returns error if number is less than 1", function(){
 	expect(pingPong(-4)).to.equal("error");
 })
});