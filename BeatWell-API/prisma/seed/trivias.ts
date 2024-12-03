import prisma from '../../src/libs/prisma';
import data from './data/trivia.json';

const seedTrivias = async () => {
  await prisma.trivia.createMany({
    data,
  });
};

export default seedTrivias;
