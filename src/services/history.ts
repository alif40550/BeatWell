import prisma from '../libs/prisma';
import { History, HistoryResponse } from '../models/History';

export const addHistory = async (data: History) =>
  await prisma.history.create({
    data,
  });
export const getHistories = async (userId: History['userId']) =>
  await prisma.history.findMany({
    where: {
      userId,
    },
  });

export const deleteHistory = async (id: HistoryResponse['id']) =>
  await prisma.history.delete({
    where: {
      id,
    },
  });

export const getHistoryById = async (id: HistoryResponse['id']) =>
  await prisma.history.findUnique({
    where: {
      id,
    },
  });