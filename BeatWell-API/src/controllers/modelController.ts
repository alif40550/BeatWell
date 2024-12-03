import { Request, Response } from 'express';
import { UserData } from '../models/User';
import { predictionSchema } from '../libs/validator/prediction.schema';
import { makePrediction } from '../services/prediction';
import { addHistory } from '../services/history';
import { getResponse, predictClass } from '../services/chatbot';
import { verifyToken } from '../libs/jwt';
import { sexMap } from '../models/Model';
import { formatInput, formatSex } from '../services/model';

export const predictCHD = async (req: Request, res: Response) => {
  const token = req.headers.authorization!;
  const user = verifyToken(token) as UserData;
  try {
    const validatedBody = predictionSchema.parse(req.body);

    const sex = formatSex(sexMap, validatedBody.sex);

    if (sex === undefined) {
      res.status(400).json({
        message: 'Prediction failed, there are incorrect request',
        error: true,
      });
      return;
    }
    const input = formatInput({ ...validatedBody, sex });
    const persentage = await makePrediction(input);

    await addHistory({
      userId: user.id,
      result: persentage,
    });

    res.status(200).json({
      message: 'Prediction success',
      error: false,
      data: persentage,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Prediction failed, there are incorrect request',
      error: true,
      data: err,
    });
  }
};

export const chat = async (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message) {
    res.status(400).json({
      error: true,
      message: 'Pesan tidak boleh kosong',
    });
    return;
  }

  const tag = await predictClass(message);
  const response = getResponse(tag);
  res.json({
    message: 'OK',
    error: false,
    data: response,
  });
};
