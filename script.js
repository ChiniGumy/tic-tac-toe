let flag = 0;
let board = [ , , , , , , , , ];
const buttons = document.querySelectorAll('.game-button');

function drawFigure(event){
	
	const button = event.target;
	
	if (button.innerHTML !== ''){
		alert('Ya esta asignado');
		return;
	}
	
	if ((flag % 2) === 0){
		button.innerHTML = 'X';
		board[button.id] = 'X';
	} else {
		button.innerHTML = 'O';
		board[button.id] = 'O';
	}
	flag++;
};

function determineWinner(){
	
	const disableButtons = () => {
		buttons.forEach(button => {
			button.disabled = true;
			button.style.cursor = 'not-allowed';
		});
	};
	
	// Rows
	
	if (board[0] === 'X' & board[1] === 'X' & board[2] === 'X'){
		alert('X GANO');
		disableButtons();
		
	} else if (board[3] === 'X' & board[4] === 'X' & board[5] === 'X'){
		alert('X GANO');
		disableButtons();

	} else if (board[6] === 'X' & board[7] === 'X' & board[8] === 'X'){
		alert('X GANO');
		disableButtons();

	} else if (board[0] === 'O' & board[1] === 'O' & board[2] === 'O'){
		alert('O GANO');
		disableButtons();

	} else if (board[3] === 'O' & board[4] === 'O' & board[5] === 'O'){
		alert('O GANO');
		disableButtons();

	} else if (board[6] === 'O' & board[7] === 'O' & board[8] === 'O'){
		alert('O GANO');
		disableButtons();

	} else if (board[0] === 'X' & board[3] === 'X' & board[6] === 'X'){
		alert('X GANO');
		disableButtons();
		
	} else if (board[1] === 'X' & board[4] === 'X' & board[7] === 'X'){
		alert('X GANO');
		disableButtons();

	} else if (board[2] === 'X' & board[5] === 'X' & board[8] === 'X'){
		alert('X GANO');
		disableButtons();

	} else if (board[0] === 'O' & board[3] === 'O' & board[6] === 'O'){
		alert('O GANO');
		disableButtons();

	} else if (board[1] === 'O' & board[4] === 'O' & board[7] === 'O'){
		alert('O GANO');
		disableButtons();
		
	} else if (board[2] === 'O' & board[5] === 'O' & board[8] === 'O'){
		alert('O GANO');
		disableButtons();

	} else if (board[0] === 'X' & board[4] === 'X' & board[8] === 'X'){
		alert('X GANO');
		disableButtons();
		
	} else if (board[2] === 'X' & board[4] === 'X' & board[6] === 'X'){
		alert('X GANO');
		disableButtons();
	};
};

function resetBoard(){
	buttons.forEach(button => {
		button.innerHTML = '';
		button.disabled = false;
		button.style.cursor = 'pointer';
	});

	flag = 0;
	board = [ , , , , , , , , , ];
};