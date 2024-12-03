import { predictionSchema } from '../libs/validator/prediction.schema';

type PredictionRequest = typeof predictionSchema._type;

export type PredictionInputs = Omit<PredictionRequest, 'sex'> & {
  sex: number;
};

export type TIntent = {
  tag: string;
  responses: string[];
};

export type TIntents = {
  intents: TIntent[];
};

export const sexMap = {
  male: 1,
  female: 0,
};
