import 'dotenv/config';
import { loadModel as predictionModelInit } from './services/prediction';
import { loadModel as chatbotModelInit } from './services/chatbot';
import startServer  from './libs/server';

predictionModelInit();
chatbotModelInit();

startServer();