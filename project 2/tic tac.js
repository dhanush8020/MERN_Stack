let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function update(boxId) {
  const box = document.getElementById(boxId);
  const index = parseInt(boxId.split('_')[1]) - 1;

  if (box.innerHTML === "" && gameBoard[index] === "") {
    box.innerHTML = currentPlayer;
    gameBoard[index] = currentPlayer;
    
    if (checkWin()) {
      setTimeout(() => {
        alert(`Player ${currentPlayer} wins!`);
        resetGame();  // Automatically reset the game after announcing the winner
      }, 10);
    } else if (!gameBoard.includes("")) {
      setTimeout(() => {
        alert("It's a draw!");
        resetGame();  // Automatically reset the game after announcing the draw
      }, 10);
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => (box.innerHTML = ""));
}

// Initialize event listeners for each box
document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', () => update(box.id));
});
