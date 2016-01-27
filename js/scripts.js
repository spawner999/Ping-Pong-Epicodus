'use strict';

/*BACK-END*/
var isValidNumber = function(input){
  return(typeof input === 'number' && input > 0);
};

var evaluateNumber = function(validNumber){
  return(validNumber % 3 === 0? (validNumber % 5 === 0? 'pingpong' : 'ping') : (validNumber % 5 === 0? 'pong' : validNumber));
};

var pingPong = function(input){
  var array = [];
    if(isValidNumber(input)){
      for(var i=1; i<=input; i++){
        array.push(evaluateNumber(i));
      }
    }
    else {
      array.push('The number you entered is invalid. Please try using a different one.');
    }
  return array;
};

/*FRONT-END*/
$(document).ready(function(){
  $('form#input-form').submit(function(event){
    $('#results').empty();
    var parsedInput = parseInt($('input#user-input').val());
    var pingPongList = pingPong(parsedInput);
    var listLength = pingPongList.length;
    for(var i=0; i<listLength; i++){
      $('#results').append('<li>' + pingPongList[i] + '</li>');
    }
    event.preventDefault();
  });
});