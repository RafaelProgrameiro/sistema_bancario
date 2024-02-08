import express from 'express';
import home from './routes/home.js';
import { clientSignIn } from './controllers/clients.js';

const app = express();

app.use(express.json());

app.use(home);
app.use(clientSignIn);

export default app;
