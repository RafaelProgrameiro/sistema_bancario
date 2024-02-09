import express from 'express';
import homeRoute from './routes/home.js';
import signUpRoute from './routes/signUp.js';
import loginRoute from './routes/login.js';
import updateEmailRoute from './routes/updateEmail.js';
import updatePassRoute from './routes/updatePass.js';

import authentication from './middleware/authentication.js';

const app = express();

app.use(express.json());

app.use(homeRoute);
app.use(signUpRoute);
app.use(loginRoute);

app.use(authentication);

app.use(updateEmailRoute);
app.use(updatePassRoute);

export default app;
