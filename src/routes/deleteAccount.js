import deleteAccount from '../controllers/deleteAccount.js';
import express from 'express';

const deleteAccountRoute = express();

deleteAccountRoute.delete('/deleteAccount', deleteAccount);

export default deleteAccountRoute;