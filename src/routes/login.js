import express from 'express';

import login from '../controllers/login.js';

import bodyReqValidation from '../middleware/bodyReqValidation.js';
import loginSchema from '../schemas/loginSchema.js';
import clientByAccount from '../middleware/clientByAccount.js';
import inactivatedAccount from '../middleware/inactivatedAccount.js';

const loginRoute = express();

loginRoute.post('/login',    
    bodyReqValidation(loginSchema),
    clientByAccount,
    inactivatedAccount,
    login);

export default loginRoute;