import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { moveCount } = req.body;

  const messages = [
    {
      header: "Oops",
      message: "I told you my algorithm isn’t very good…"
    },
    {
      header: "Ah ha!",
      message: "Maybe I can win!"
    },
    {
      header: "Eek",
      message: "Go easy on me!"
    },
    {
      header: "Doin' my best",
      message: "I’m hoping for a draw…"
    }
  ];

  let randomMessage = null;
  if (moveCount > 2) {
    randomMessage = messages[Math.floor(Math.random() * messages.length)];
  }

  res.status(200).json({ message: randomMessage });
}
