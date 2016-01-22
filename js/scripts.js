var isValidNumber = function(input){
  return(typeof input === 'number' && input > 0);
};

var pingPong = function(number){
  return(number % 3 === 0? (number % 5 === 0? 'pingpong' : 'ping') : (number % 5 === 0? 'pong' : number));
};

var appendResult = function(number){
  for(var i=1; i<=number; i++){
    $('#results').append('<li>' + pingPong(i) + '</li>');
  }
};

var appendErrorMsg = function(){
  $('#results').append('<li>The number you entered is invalid. Please try entering a different one.</li>');
};

$(document).ready(function(){
  $('form#input-form').submit(function(event) {
    $('#results').empty();
    var parsedInput = parseInt($('input#user-input').val());
    if(isValidNumber(parsedInput)) {
      appendResult(parsedInput);
    }
    else {
      appendErrorMsg();
    }
    event.preventDefault();
  });
});