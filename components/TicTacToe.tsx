import React, { useState, useEffect } from "react";
import Icons from "./Icons";
type Player = "X" | "O" | null;

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player>(null);
  const [message, setMessage] = useState<string>("Shall we play a game?");
  const [showMessage, setShowMessage] = useState<boolean>(true);
  const [moveCount, setMoveCount] = useState<number>(0);

  useEffect(() => {
    const checkWinner = calculateWinner(board);
    if (checkWinner) {
      setWinner(checkWinner);
      setMessage(
        checkWinner === "X"
          ? "Nice work! Now press any key in the terminal and we’ll look at the results together."
          : "I win! You can try again, or press any key in the terminal and we’ll look at the results together."
      );
      setShowMessage(true);
      return;
    }

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
        setCurrentPlayer("X");
        setMoveCount(moveCount + 1);
        if (moveCount === 1) {
          setMessage(
            "Guess what? My algorithm isn’t very good. I’m just picking random moves. The important thing is that Replay is capturing all these actions to investigate when we’re done recording."
          );
        } else {
          const fillerComments = [
            "I told you my algorithm isn’t very good…",
            "Maybe I can win! Probably not, though",
            "Go easy on me!",
            "I’m hoping for a draw…"
          ];
          setMessage(
            fillerComments[Math.floor(Math.random() * fillerComments.length)]
          );
        }
        setShowMessage(true);
      }
    }
  }, [currentPlayer, board, moveCount, winner]);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    const checkWinner = calculateWinner(newBoard);
    if (checkWinner) {
      setWinner(checkWinner);
      setMessage(
        checkWinner === "X"
          ? "Nice work! Now press any key in the terminal and we’ll look at the results together."
          : "I win! You can try again, or press any key in the terminal and we’ll look at the results together."
      );
      setShowMessage(true);
      return;
    }

    if (moveCount === 0) {
      if (index === 4) {
        setMessage(
          "Nice move! Center spot, eh? That’s going to be tough for me to come back from."
        );
      } else if ([0, 2, 6, 8].includes(index)) {
        setMessage("Nice move! You chose a corner.");
      } else {
        setMessage("Nice move! You chose an edge.");
      }
    } else {
      setMessage("Your move!");
    }
    setShowMessage(true);
    setMoveCount(moveCount + 1);

    // Hide the message after 2 seconds and then make the computer's move
    setTimeout(() => {
      setShowMessage(false);
      setTimeout(() => {
        setCurrentPlayer("O");
      }, 500); // Small delay to ensure the message is hidden before the computer's move
    }, 2000);
  };

  const calculateWinner = (board: Player[]): Player => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
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
    setMessage("Shall we play a game?");
    setShowMessage(true);
    setMoveCount(0);
  };

  const isGameOver = (board: Player[]): boolean => {
    return (
      calculateWinner(board) !== null || board.every((cell) => cell !== null)
    );
  };

  return (
    <div className="flex justify-center items-start mt-3">
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
      </div>
      <div className="ml-8 w-64 text-left">
        {showMessage && (
          <div className="message-box">
            <div className="text-lg font-bold animated-gradient-text">
              Header
            </div>
            <p>{message}</p>
          </div>
        )}
        <div className="flex items-center justify-between mt-4">
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={resetGame}
          >
            {isGameOver(board) && <Icons type="refresh" />}
          </div>
        </div>
      </div>
    </div>
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
