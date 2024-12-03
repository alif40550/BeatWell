import { Request, Response } from 'express';
import { randNum } from '../utils/number';
import { getActivityById } from '../services/activity';

export const getActivity = async (req: Request, res: Response) => {
  const activity = await getActivityById(randNum(10));

  if (!activity) {
    res.status(400).json({
      message: 'gagal mendapatkan data activity',
      error: true,
    });
    return;
  }
  res.status(200).json({
    message: 'berhasil mendapatkan activity',
    error: false,
    data: activity,
  });
  return;
};
