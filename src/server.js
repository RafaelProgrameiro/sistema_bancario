import express from 'express';

import homeRoute from './routes/home.js';
import signUpRoute from './routes/signUp.js';
import loginRoute from './routes/login.js';
import reactiveAccountRoute from './routes/reactiveAccount.js';

import authentication from './middleware/authentication.js';
import inactivatedAccount from './middleware/inactivatedAccount.js';

import updateEmailRoute from './routes/updateEmail.js';
import updatePassRoute from './routes/updatePass.js';
import detailsRoute from './routes/details.js';
import deleteAccountRoute from './routes/deleteAccount.js';

import depositRoute from './routes/deposit.js';
import withdrawRoute from './routes/withdraw.js';
import transferRoute from './routes/transfer.js';
import statementRoute from './routes/statement.js';

const app = express();

app.use(express.json());

app.use(homeRoute);
app.use(signUpRoute);
app.use(loginRoute);
app.use(reactiveAccountRoute);

app.use(authentication, inactivatedAccount);

app.use(detailsRoute);
app.use(statementRoute);
app.use(updateEmailRoute);
app.use(updatePassRoute);
app.use(deleteAccountRoute);

app.use(depositRoute);
app.use(withdrawRoute);
app.use(transferRoute);


export default app;
