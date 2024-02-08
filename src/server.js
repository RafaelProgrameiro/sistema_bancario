import express from 'express';
import home from './routes/home.js';

const app = express();

app.use(express.json());

app.use(home);

export default app;
