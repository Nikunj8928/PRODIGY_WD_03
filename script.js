document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("tic-tac-toe");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    // Create the game board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", () => handleCellClick(i));
        board.appendChild(cell);
    }

    // Function to handle cell clicks
    function handleCellClick(index) {
        if (gameBoard[index] === "" && !checkWinner()) {
            gameBoard[index] = currentPlayer;
            updateBoard();
            togglePlayer();
            checkWinner();
        }
    }

    // Function to update the game board UI
    function updateBoard() {
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell, index) => {
            cell.textContent = gameBoard[index];
        });
    }

    // Function to toggle between X and O
    function togglePlayer() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    // Function to check for a winner
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                alert(`Player ${gameBoard[a]} wins!`);
                resetGame();
                return true;
            }
        }

        if (!gameBoard.includes("")) {
            alert("It's a tie!");
            resetGame();
        }

        return false;
    }

    // Function to reset the game
    function resetGame() {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        updateBoard();
        currentPlayer = "X";
    }
});
