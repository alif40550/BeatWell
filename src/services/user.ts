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
  const password = user.password;
  const name = user.name;
  return await prisma.user.create({
    data: {
      ...user,
      name: name || user.email.split('@')[0],
      password: password && await bcrypt.hash(password, 10),
    },
  });
};

export const reviseUser = async (id: number, user: SignUpData) => {
  const password = user.password;
  return await prisma.user.update({
    where: { id },
    data: {
      ...user,
      password: password && await bcrypt.hash(password, 10),
    },
  });
};

export const destroyUser = async (id: number) =>
  await prisma.user.delete({
    where: {
      id,
    },
  });
