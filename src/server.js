import express from 'express';
import homeRoute from './routes/home.js';
import signInRoute from './routes/signIn.js';

const app = express();

app.use(express.json());

app.use(homeRoute);
app.use(signInRoute);

export default app;
