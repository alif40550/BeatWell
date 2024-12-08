import { z } from 'zod';

export const predictionSchema = z.object({
  sex: z.string(),
  age: z.number(),
  cigsPerday: z.number(),
  BPMeds: z.boolean(),
  prevalentStroke: z.boolean(),
  prevalentHyp: z.boolean(),
  diabetes: z.boolean(),
  totChol: z.number(),
  sysBP: z.number(),
  diaBP: z.number(),
  height: z.number(),
  weight: z.number(),
  heartRate: z.number(),
  glucose: z.number(),
});
