import tf from '../libs/tfjs';
import natural from 'natural';
import { initiateModel, readJSON } from './model';
import { TIntent, TIntents } from '../models/Model';
import {
  CHATBOT_CLASSES_URL,
  CHATBOT_INTENTS_URL,
  CHATBOT_MODEL_URL,
  CHATBOT_WORDS_URL,
} from '../utils/env';



let model: tf.LayersModel;

const lemmatizer = (text: string) => natural.StemmerId.stem(text);

const { intents }: TIntents = readJSON(CHATBOT_INTENTS_URL);
// console.log('🚀 ~ intents:', intents);
const words = readJSON(CHATBOT_WORDS_URL) as string[];
const classes = readJSON(CHATBOT_CLASSES_URL) as string[];

export const loadModel = async () => {
  model = await initiateModel(CHATBOT_MODEL_URL);
};

const cleanUpSentence = (sentence: string) => {
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer.tokenize(sentence.toLowerCase());
  return tokens.map((token) => lemmatizer(token));
};

const bow = (sentence: string, words: string[]) => {
  const sentenceWords = cleanUpSentence(sentence);
  const bag = Array(words.length).fill(0);

  sentenceWords.forEach((word) => {
    const index = words.indexOf(word);
    if (index > -1) {
      bag[index] = 1;
    }
  });

  return tf.tensor2d([bag]);
};

export const predictClass = async (sentence: string) => {
  const inputTensor = bow(sentence, words);
  const predictions = model.predict(inputTensor) as tf.Tensor;
  const predictionArray = predictions.arraySync() as number[][];
  const maxIndex = predictionArray[0].indexOf(Math.max(...predictionArray[0]));
  return classes[maxIndex];
};

export const getResponse = (tag: string) => {
  const intent = intents.find((intent: TIntent) => intent.tag === tag);
  if (intent) {
    return intent.responses[
      Math.floor(Math.random() * intent.responses.length)
    ];
  }
  return 'Maaf, saya tidak mengerti.';
};
