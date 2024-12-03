import request from 'supertest';
import startServer from '../src/libs/server';

const server = startServer();

afterAll(() => {
  server.close();
});

describe('GET /', () => {
  it('should return a response with 200', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});
