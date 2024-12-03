import { z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export const userResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

export const userSignInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const userSignUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

