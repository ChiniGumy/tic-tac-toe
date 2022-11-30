let flag = 0;
let board = [ , , , , , , , , ];
const buttons = document.querySelectorAll('.game-button');
const winnerTitle = document.getElementById('winner-title');

function disableButtons(){
	buttons.forEach(button => {
		button.disabled = true;
		button.style.cursor = 'not-allowed';
	});
};

function determineWinner(){
	
	// Rows
	
	if (board[0] === 'X' & board[1] === 'X' & board[2] === 'X'){
		winnerTitle.innerText = '¡Jugador X gana!';
		disableButtons();
		
	} else if (board[3] === 'X' & board[4] === 'X' & board[5] === 'X'){
		winnerTitle.innerText = '¡Jugador X gana!';
		disableButtons();

	} else if (board[6] === 'X' & board[7] === 'X' & board[8] === 'X'){
		winnerTitle.innerText = '¡Jugador X gana!';
		disableButtons();

	} else if (board[0] === 'O' & board[1] === 'O' & board[2] === 'O'){
		winnerTitle.innerText = '¡Jugador O gana!';
		disableButtons();

	} else if (board[3] === 'O' & board[4] === 'O' & board[5] === 'O'){
		winnerTitle.innerText = '¡Jugador O gana!';
		disableButtons();

	} else if (board[6] === 'O' & board[7] === 'O' & board[8] === 'O'){
		winnerTitle.innerText = '¡Jugador O gana!';
		disableButtons();

	} else if (board[0] === 'X' & board[3] === 'X' & board[6] === 'X'){
		winnerTitle.innerText = '¡Jugador X gana!';
		disableButtons();
		
	} else if (board[1] === 'X' & board[4] === 'X' & board[7] === 'X'){
		winnerTitle.innerText = '¡Jugador X gana!';
		disableButtons();

	} else if (board[2] === 'X' & board[5] === 'X' & board[8] === 'X'){
		winnerTitle.innerText = '¡Jugador X gana!';
		disableButtons();

	} else if (board[0] === 'O' & board[3] === 'O' & board[6] === 'O'){
		winnerTitle.innerText = '¡Jugador O gana!';
		disableButtons();

	} else if (board[1] === 'O' & board[4] === 'O' & board[7] === 'O'){
		winnerTitle.innerText = '¡Jugador O gana!';
		disableButtons();
		
	} else if (board[2] === 'O' & board[5] === 'O' & board[8] === 'O'){
		winnerTitle.innerText = '¡Jugador O gana!';
		disableButtons();

	} else if (board[0] === 'X' & board[4] === 'X' & board[8] === 'X'){
		winnerTitle.innerText = '¡Jugador X gana!';
		disableButtons();
		
	} else if (board[2] === 'X' & board[4] === 'X' & board[6] === 'X'){
		winnerTitle.innerText = '¡Jugador X gana!';
		disableButtons();

	} else if (board[0] === 'O' & board[4] === 'O' & board[8] === 'O'){
		winnerTitle.innerText = `¡Jugador O gana!`;
		disableButtons();
		
	} else if (board[2] === 'O' & board[4] === 'O' & board[6] === 'O'){
		winnerTitle.innerText = '¡Jugador O gana!';
		disableButtons();

	} else if (!board.includes(undefined)){
		winnerTitle.innerText = 'Empate';
		disableButtons();
	}
};

function drawFigure(event){
	
	const button = event.target;
	winnerTitle.style.color='#fff';
	winnerTitle.innerText = 'TIC TAC TOE';
	
	if (button.innerHTML !== ''){
		winnerTitle.innerText = '¡La casilla ya está llena!';
		winnerTitle.style.color='var(--red-error)';
		return;
	}
	
	if ((flag % 2) === 0){
		board[button.id] = 'X';
		button.innerHTML = 'X';
		button.style.color = 'var(--red)';
	} else {
		board[button.id] = 'O';
		button.innerHTML = 'O';
		button.style.color = 'var(--blue)';
	}
	flag++;

	determineWinner();

};

function resetBoard(){
	buttons.forEach(button => {
		button.innerHTML = '';
		button.disabled = false;
		button.style.cursor = 'pointer';
		button.style.color = 'var(--white)'
	});

	winnerTitle.innerText = 'TIC TAC TOE';
	winnerTitle.style.color = '#fff';
	flag = 0;
	board = [ , , , , , , , , , ];
};