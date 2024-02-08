import express from 'express';

import signUp from '../controllers/signUp.js';

import bodyReqValidation from '../middleware/bodyReqValidation.js';
import validCpf from '../middleware/validCpf.js';

import signUpSchema from '../schemas/signUpSchema.js';

const signUpRoute = express();

signUpRoute.post('/signup',
    bodyReqValidation(signUpSchema),
    validCpf,        
    signUp);

export default signUpRoute;