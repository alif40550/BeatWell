import { Request, Response } from 'express';
import { ValidationRequest } from '../models/User';
import { destroyUser, reviseUser } from '../services/user';

export const deleteCurrentUser = async (req: Request, res: Response) => {
  const request = req as ValidationRequest;
  const { id } = request.userData;

  await destroyUser(id);

  res.status(200).json({
    message: 'User deleted successfully',
    error: false,
  });
};

export const updateCurrentUser = async (req: Request, res: Response) => {
  const request = req as ValidationRequest;
  const { id } = request.userData;

  for (const key in request.body) {
    if (request.body[key] === null) {
      delete request.body[key];
    }
  }

  const { name, email, password } = request.body;

  await reviseUser(id, { name, email, password });

  res.status(200).json({
    message: 'User updated successfully',
    error: false,
  });
};
