import express from 'express';
import updateEmail from '../controllers/updateEmail.js';

import emailSchema from '../schemas/emailSchema.js';
import bodyReqValidation from '../middleware/bodyReqValidation.js';
import inactivatedAccount from '../middleware/inactivatedAccount.js';

const updateEmailRoute = express();

updateEmailRoute.patch('/updateEmail', inactivatedAccount, bodyReqValidation(emailSchema), updateEmail);

export default updateEmailRoute;