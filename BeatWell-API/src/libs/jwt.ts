import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/env';
import { UserData } from '../models/User';

export const generateToken = (payload: UserData) =>
  jwt.sign(payload, JWT_SECRET!, {
    expiresIn: '30 days',
  });

export const verifyToken = (token: string) => jwt.verify(token, JWT_SECRET!);