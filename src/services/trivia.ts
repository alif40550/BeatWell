import prisma from '../libs/prisma';

export const getTriviaById = async (id: number) =>
  await prisma.trivia.findUnique({
    where: {
      id,
    },
  });
