import { Request, Response } from 'express';
import { userSignInSchema, userSignUpSchema } from '../libs/validator/user.schema';
import bcrypt from 'bcrypt';
import { createPayload, createUser, getUser } from '../services/user';
import { generateToken } from '../libs/jwt';

export const signIn = async (req: Request, res: Response) => {
  try {
    const validatedBody = userSignInSchema.parse(req.body);
    const user = await getUser(validatedBody.email);

    if (!user) {
      res.status(400).json({
        message: 'eamil or password is invalid',
        error: true,
      });
      return;
    }

    const passwordCorrcet = await bcrypt.compare(
      validatedBody.password,
      user.password!
    );

    if (!passwordCorrcet) {
      res.status(400).json({
        message: 'eamil or password is invalid',
        error: true,
      });
      return;
    }

    const payload = createPayload(user);

    const token = generateToken(payload);

    res.status(200).json({
      message: 'Login success',
      error: false,
      data: { ...payload, token },
    });
  } catch {
    res.status(400).json({
      message: 'Email or password is invalid',
      error: true,
    });
  }
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const validatedBody = userSignUpSchema.parse(req.body);
    const isExisted = await getUser(validatedBody.email);

    if (isExisted) {
      res.status(400).json({
        message: 'Your credential is not valid',
        error: true,
      });
      return;
    }

    await createUser(validatedBody);

    res.status(200).json({
      message: 'Sign up success',
      error: false,
    });
  } catch (err){
    res.status(400).json({
      message: `Your credential is not valid ${err}`,
      error: true,
    });
  }
};
