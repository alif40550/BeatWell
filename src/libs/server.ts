import express from 'express';
import parser from '../middlewares/parser';
import router from '../routes/unrestricted';
import { PORT } from '../utils/env';

const app = express();
const port = PORT || 3000;

app.use(parser);
app.use(router);

const startServer = () => {
  const server = app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
  });
  return server;
};

export default startServer;
