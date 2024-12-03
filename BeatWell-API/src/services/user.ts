import { User } from '@prisma/client';
import prisma from '../libs/prisma';
import { SignUpData, UserData } from '../models/User';
import bcrypt from 'bcrypt';

export const getUser = async (email: string) =>
  await prisma.user.findFirst({
    where: {
      email,
    },
  });

export const createPayload = (user: User): UserData => {
  return {
    id: user.id,
    name: user.name || user.email.split('@')[0],
    email: user.email,
  };
};

export const createUser = async (user: SignUpData) => {
  const password = await bcrypt.hash(user.password!, 10);
  return await prisma.user.create({
    data: {
      name: user.name || user.email.split('@')[0],
      email: user.email,
      password: password,
    },
  });
};
