let flag = 0;

// Function that draws the O or the X

function drawFigure(event){
	
	const button = event.target;

	if (button.innerHTML !== ''){
		alert('Ya esta asignado');
		return;
	}

	if ((flag % 2) === 0){
		button.innerHTML = 'X';
	} else {
		button.innerHTML = 'O';
	}
	flag++;
}

function resetBoard(){
	const buttons = document.querySelectorAll('.game-button');
	
	buttons.forEach(button => {
		button.innerHTML = '';
	});

}

