import request from 'supertest';
import { server } from '../src';
import input from './data/predictionInputs.json';
import testUser from './data/testUser.json';

export const signIn = async () => {
  const res = await request(server)
    .post('/login')
    .send(testUser)
    .set('Content-Type', 'application/json');

  return res.body.data.token;
};

export const makePrediction = async (token: string) =>
  await request(server)
    .post('/prediction')
    .set('Authorization', token)
    .send(input)
    .set('Content-Type', 'application/json');

export const getHistories = async (token: string) =>
  await request(server)
    .get('/histories')
    .set('Authorization', token)
    .set('Content-Type', 'application/json');
