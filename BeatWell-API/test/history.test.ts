// import { HistoryResponse } from '../src/models/History';
// import { getHistories, signIn } from './services';
// import startServer from '../src/libs/server';

// const server = startServer();

// beforeAll(() => {});

// afterAll(() => {
//   server.close();
//   // clear the history
// });

// /*
//  * TODO:
//  * 1. make get history by id test case,
//  */

// describe('GET /histories', () => {
//   it('should return a response with 200', async () => {
//     const token = await signIn();
//     const res = await getHistories(token);
//     expect(res.body.error).toBe(false);
//     expect(res.status).toBe(200);
//   });
//   it('should return a response with json', async () => {
//     const token = await signIn();
//     const res = await getHistories(token);
//     expect(res.type).toBe('application/json');
//   });
//   it('should return a array of history', async () => {
//     const token = await signIn();
//     const { body } = await getHistories(token);
//     const histories = body.data as Array<HistoryResponse>;
//     console.log('🚀 ~ it ~ typeof histories:', typeof histories);
//     expect(typeof histories).toBe('object');
//   });
//   it('should return a error 401 if token is invalid', async () => {
//     const token = 'jasfbaskjdb';
//     const res = await getHistories(token);
//     expect(res.body.error).toBe(true);
//     expect(res.status).toBe(401);
//   });
// });

// describe('DELETE /histories', () => {
//   beforeAll(() => {
//     console.log('beforeAll');
//   });
//   afterAll(() => {});
//   it('should return a response with 200', async () => {
//     const token = await signIn();
//     const res = await getHistories(token);
//     expect(res.body.error).toBe(false);
//     expect(res.status).toBe(200);
//   });
//   it('should return a response with json', async () => {
//     const token = await signIn();
//     const res = await getHistories(token);
//     expect(res.type).toBe('application/json');
//   });
//   //   it('should return a array of history', async () => {
//   //     const token = await signIn();
//   //     const { body } = await getHistories(token);
//   //     expect(typeof body.data).toBe('array');
//   //   });
//   //   it('should return a error 401 if token is invalid', async () => {
//   //     const token = 'jasfbaskjdb';
//   //     const res = await getHistories(token);
//   //     expect(res.body.error).toBe(true);
//   //     expect(res.status).toBe(401);
//   //   });
// });
