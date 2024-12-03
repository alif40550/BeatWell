import prisma from '../libs/prisma';

export const getActivityById = async (id: number) =>
  await prisma.activity.findUnique({
    where: {
      id,
    },
  });
