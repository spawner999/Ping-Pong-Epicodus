var pingPong = function(number){
	if(typeof number !== 'number'){
		return 'error';
	}
	if(number < 1){
		return 'error';
	}
	if(number % 15 ===0){
		return 'pingpong';
	}
	if(number % 3 === 0){
		return 'ping';
	}
	if(number % 5 === 0){
		return 'pong';
	}
};

