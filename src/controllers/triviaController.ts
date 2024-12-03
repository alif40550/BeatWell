import { Request, Response } from 'express';
import { randNum } from '../utils/number';
import { getTriviaById } from '../services/trivia';

export const getTrivia = async (req: Request, res: Response) => {
  const randId = randNum(100);

  const data = await getTriviaById(randId);

  if (!data) {
    res.status(404).json({
      message: 'trivia gagal didapatkan',
      error: true,
    });
    return;
  }

  res.status(200).json({
    message: 'berhasil mendapapatkan trivia',
    error: false,
    data: {
      trivia: data.trivia,
    },
  });
};
