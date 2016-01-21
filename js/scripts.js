var pingPong = function(number){
	return(number % 3 === 0? (number % 5 === 0? 'pingpong' : 'ping') : (number % 5 === 0? 'pong' : number));
};

