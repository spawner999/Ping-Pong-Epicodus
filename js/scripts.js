var isValidNumber = function(input){
	return(typeof input === 'number' && input > 0);
};

var pingPong = function(number){
	return(number % 3 === 0? (number % 5 === 0? 'pingpong' : 'ping') : (number % 5 === 0? 'pong' : number));
};

var appendResult = function(number){
	for(var i=1; i<=number; i++){
		console.log(pingPong(i));
	}
};

$(document).ready(function(){
	$("form#input-form").submit(function(event) {
  	var userInput = parseInt($("input#user-input").val());
  	appendResult(userInput);
  	$('input#user-input').val('');
    event.preventDefault();
});
});