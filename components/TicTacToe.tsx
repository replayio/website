import React, { useState, useEffect } from "react";
import Icons from "./Icons";
type Player = "X" | "O" | null;

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player>(null);

  useEffect(() => {
    if (currentPlayer === "O" && !winner) {
      const emptyIndices = board
        .map((value, index) => (value === null ? index : null))
        .filter((val) => val !== null);
      if (emptyIndices.length > 0) {
        const randomIndex =
          emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        const newBoard = [...board];
        newBoard[randomIndex] = "O";
        setBoard(newBoard);
        setWinner(calculateWinner(newBoard));
        setCurrentPlayer("X");
      }
    }
  }, [currentPlayer, board, winner]);

  const handleClick = (index: number) => {
    if (board[index] || winner || currentPlayer !== "X") return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setWinner(calculateWinner(newBoard));
    setCurrentPlayer("O");
  };

  const calculateWinner = (board: Player[]): Player => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];

    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  const isGameOver = (board: Player[]): boolean => {
    const isBoardFull = board.every((cell) => cell !== null);
    const winner = calculateWinner(board);
    return winner !== null || isBoardFull;
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold animated-gradient-text">
          Get started with a game
        </div>
        <div className="text-2xl font-bold cursor-pointer" onClick={resetGame}>
          {isGameOver(board) && <Icons type="refresh" />}
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <div>
          <div style={styles.board}>
            {board.map((value, index) => (
              <div
                key={index}
                style={styles.cell}
                onClick={() => handleClick(index)}
              >
                {value}
              </div>
            ))}
          </div>
          <div
            className={`${isGameOver(board) ? "block" : "invisible"} congrats`}
          >
            <div className="flex">
              <div className="flex items-center flex-grow">
                <div className="mr-2">
                  <Icons type={winner === "X" ? "trophy" : "terminal"} />
                </div>
                <h2 className="animated-gradient-text-2">
                  {winner === "X"
                    ? "Winner! Press any key in your terminal."
                    : "Done! Press any key in your terminal."}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 110px)",
    gap: "5px"
  },
  cell: {
    width: "110px",
    height: "110px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    fontWeight: "bold",
    backgroundColor: "#efefef",
    cursor: "pointer",
    borderRadius: "5px"
  }
};

export default TicTacToe;
