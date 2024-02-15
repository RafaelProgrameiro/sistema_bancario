import express from 'express';
import updateEmail from '../controllers/updateEmail.js';

import emailSchema from '../schemas/emailSchema.js';
import bodyReqValidation from '../middleware/bodyReqValidation.js';

const updateEmailRoute = express();

updateEmailRoute.patch('/updateEmail', bodyReqValidation(emailSchema), updateEmail);

export default updateEmailRoute;