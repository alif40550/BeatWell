import { Request, Response } from 'express';
import { getFoodById, getRandomFoods } from '../services/food';

export const indexRandomFoods = async (req: Request, res: Response) => {
  const limit = (req.params && req.params.limit) || 6;
  const foods = await getRandomFoods(329, Number(limit));
  if (!foods) {
    res.status(404).json({
      message: 'Gagal mendapatkan data food',
      error: true,
    });
    return;
  }

  res.status(200).json({
    message: 'berhasil mendapapatkan data food',
    error: false,
    data: foods,
  });
  return;
};

export const getDetailedFood = async (req: Request, res: Response) => {
  const { id } = req.params;

  const food = await getFoodById(Number(id));

  if (!food) {
    res.status(404).json({
      message: 'Gagal mendapatkan data food',
      error: true,
    });
    return;
  }

  res.status(200).json({
    message: 'berhasil mendapapatkan data food',
    error: false,
    data: food,
  });
  return;
};
