import React, { useState, useEffect } from "react";
import Icons from "./Icons";
type Player = "X" | "O" | null;

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player>(null);
  const [message, setMessage] = useState<string>("Shall we play a game?");
  const [header, setHeader] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(true);
  const [moveCount, setMoveCount] = useState<number>(0);

  useEffect(() => {
    if (currentPlayer === "O" && !winner) {
      console.log(winner);
      const emptyIndices = board
        .map((value, index) => (value === null ? index : null))
        .filter((val) => val !== null);
      if (emptyIndices.length > 0) {
        setTimeout(() => {
          const randomIndex =
            emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
          const newBoard = [...board];
          newBoard[randomIndex] = "O";
          setBoard(newBoard);

          const checkWinner = calculateWinner(newBoard);
          if (checkWinner) {
            setWinner(checkWinner);
            if (checkWinner === "O") {
              setMessage(
                "Too bad! Now press any key in the terminal and we’ll look at the results together."
              );
            } else {
              setMessage(
                "Nice work! Now press any key in the terminal and we’ll look at the results together."
              );
            }
            setShowMessage(true);
            return;
          }

          if (isGameOver(newBoard)) {
            setMessage("It's a draw! Try again.");
            setShowMessage(true);
            return;
          }

          setCurrentPlayer("X");
        }, Math.random() * (2000 - 500) + 500);
      }
    }
  }, [currentPlayer, board, winner]);

  useEffect(() => {
    if (moveCount > 2) {
      fetch("/api/tictacbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ moveCount })
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            setMessage(data.message.message);
            setHeader(data.message.header);
          }
        });
    } else {
      if (moveCount === 0) {
        setHeader("Shall we play a game?");
        setMessage(
          "Let’s play Tic Tac Toe! It’ll help me explain some of Replay’s best features."
        );
      } else if (moveCount === 1) {
        setHeader("Nice move!");
        setMessage("Oh, that’s going to be tough for me to come back from.");
      } else if (moveCount === 2) {
        setHeader("Guess what?");
        setMessage(
          "I’m just picking random moves. The important thing is that Replay is capturing all these actions to investigate when we’re done recording."
        );
      }
    }
  }, [moveCount]);

  const handleClick = async (index: number) => {
    if (board[index] || winner || currentPlayer === "O") return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const checkWinner = calculateWinner(newBoard);
    if (checkWinner) {
      setWinner(checkWinner);
      if (checkWinner === "O") {
        setHeader("Better luck next time!");
        setMessage(
          "Now press any key in the terminal and we’ll look at the results together."
        );
      } else {
        setHeader("Nice work!");
        setMessage(
          "Now press any key in the terminal and we’ll look at the results together."
        );
      }
      setShowMessage(true);
      return;
    }

    if (isGameOver(newBoard)) {
      setHeader("Draw!");
      setMessage(
        "Now press any key in the terminal and we’ll look at the results together."
      );
      return;
    }

    setCurrentPlayer("O");
    setMoveCount((prevCount) => prevCount + 1);
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
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
      <div className="ml-8 w-64 text-left relative">
        {showMessage && (
          <div className="message-box">
            <div className="text-2xl font-bold animated-gradient-text mb-4">
              {header}
            </div>
            <p className="text-xl">{message}</p>
          </div>
        )}
        <div
          className="flex items-center justify-between mt-4 absolute top-0 right-0"
          style={{ top: "-65px", right: "-35px" }}
        >
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
