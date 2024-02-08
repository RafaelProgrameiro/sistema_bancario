import express from 'express'
import signIn from '../controllers/signIn.js';
import bodyReqValidation from '../middleware/bodyReqValidation.js';

import signInSchema from '../schemas/signInSchema.js';

const signInRoute = express();

signInRoute.post('/signin', bodyReqValidation(signInSchema), signIn)

export default signInRoute;