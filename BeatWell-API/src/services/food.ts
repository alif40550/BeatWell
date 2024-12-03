import prisma from '../libs/prisma';
import { randNum } from '../utils/number';

export const getRandomFoods = async (n: number, limit: number) =>
  await prisma.healthyFood.findMany({
    where: {
      id: {
        in: Array.from({ length: limit }, () => randNum(n)),
      },
    },
  });

export const getFoodById = async (id: number) =>
  await prisma.healthyFood.findUnique({
    where: {
      id,
    },
  });
