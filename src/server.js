import express from 'express';
import homeRoute from './routes/home.js';
import signUpRoute from './routes/signUp.js';

const app = express();

app.use(express.json());

app.use(homeRoute);
app.use(signUpRoute);

export default app;
