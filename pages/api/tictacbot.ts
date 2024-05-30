import { NextApiRequest, NextApiResponse } from "next";

function calculateWinner(board: any): string {
  return "winner";
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { board } = req.body;

  const gameResult = calculateWinner(board);
  res.status(200).json({ text: `Game completed with result: ${gameResult}` });
}
