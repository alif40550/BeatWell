import prisma from '../../src/libs/prisma';
import data from './data/processedHealthyFoods.json';

const seedHealthyFoods = async () => {
  await prisma.healthyFood.createMany({
    data,
  });
};

export default seedHealthyFoods;
