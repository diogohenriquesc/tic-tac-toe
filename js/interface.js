const squares = document.querySelectorAll('.square');
const restartButton = document.querySelector('.restart-button');

restartButton.addEventListener('click', restartGame);

squares.forEach((square) => {
	square.addEventListener('click', () => {
		handleClick(event);
	});
});

function handleClick(event) {
	let square = event.target;
	let position = square.dataset.id;

	if (handleMove(position)) {
		setTimeout(() => {
			alert(`Game Over! - Winner is player ${playerTurn + 1}!`);
		}, 50);
	}
	updateSquare(position);
}

function updateSquare(position) {
	let square = document.querySelector(`.square[data-id="${position}"]`);
	let symbol = board[square.dataset.id];
	if (symbol != '') {
		square.classList.add(`${symbol}`);
	}
}

function clearBoard() {
	squares.forEach((square) => {
		square.classList.remove('o', 'x');
	});
}
