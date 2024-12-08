import { Request, Response } from 'express';
import {
  deleteHistory,
  getHistories,
  getHistoryById,
} from '../services/history';

export const indexUserHistories = async (
  req: Request,
  res: Response
) => {
  const userId = req.params.id;
  if (!userId) {
    res.status(400).json({
      message: 'Id is not valid',
      error: true,
    });
    return;
  }
  const histories = await getHistories(Number(userId));
  res.status(200).json({
    message: 'berhasil mendapatkan list history',
    error: false,
    data: histories,
  });
};

export const getById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(400).json({
      message: 'Id is not valid',
      error: true,
    });
    return;
  }
  const history = await getHistoryById(id);
  res.status(200).json({
    message: 'berhasil mendapatkan history',
    error: false,
    data: history,
  });
};

export const destroy = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(404).json({
      message: 'Id is not found',
      error: true,
    });
    return;
  }
  await deleteHistory(id);
  res.status(200).json({
    message: 'berhasil',
    error: false,
  });
};
