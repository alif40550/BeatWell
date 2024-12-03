import { PredictionInputs, sexMap } from '../models/Model';
import tf from '../libs/tfjs';
import fs from 'fs';

export const formatSex = (map: typeof sexMap, data: string) =>
  map[data.toLowerCase() as keyof typeof map];

export const formatInput = (inputs: PredictionInputs) => [
  inputs.sex,
  inputs.age,
  Number(inputs.cigsPerday > 0),
  inputs.cigsPerday,
  Number(inputs.BPMeds),
  Number(inputs.prevalentStroke),
  Number(inputs.prevalentHyp),
  Number(inputs.diabetes),
  inputs.totChol,
  inputs.sysBP,
  inputs.diaBP,
  inputs.BMI,
  inputs.heartRate,
  inputs.glucose,
];

export const initiateModel = async (url: string) => {
  try {
    const model = await tf.loadLayersModel(url);
    return model;
  } catch (error) {
    console.log('🚀 ~ loadModel ~ error:', error);
    throw error;
  }
};

export const readJSON = (url:string) =>
  JSON.parse(fs.readFileSync(url, 'utf-8'));
