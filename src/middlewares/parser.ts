import cors from 'cors';
import { json, urlencoded } from 'express';
import express from 'express';

const app = express();
app.use(json());
app.use(urlencoded());
app.use(cors());

export default app;
