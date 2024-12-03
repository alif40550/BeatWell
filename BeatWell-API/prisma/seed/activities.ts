import prisma from '../../src/libs/prisma';
import data from './data/activities.json';

const seedActivities = async () => {
  await prisma.activity.createMany({
    data,
  });
};

export default seedActivities;
