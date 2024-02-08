import express from 'express';

import login from '../controllers/login.js';

import bodyReqValidation from '../middleware/bodyReqValidation.js';
import loginSchema from '../schemas/loginSchema.js';

const loginRoute = express();

loginRoute.post('/login',
    bodyReqValidation(loginSchema),
    login);

export default loginRoute;