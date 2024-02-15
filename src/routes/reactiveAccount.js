import express from 'express';

import reactiveAccount from '../controllers/reactiveAccount.js';

import bodyReqValidation from '../middleware/bodyReqValidation.js';
import loginSchema from '../schemas/loginSchema.js';
import clientByAccount from '../middleware/clientByAccount.js';

const reactiveAccountRoute = express();

reactiveAccountRoute.post('/reactive',    
    bodyReqValidation(loginSchema),
    clientByAccount,
    reactiveAccount);

export default reactiveAccountRoute;