import express from 'express';
import updatePass from '../controllers/updatePass.js';

import passSchema from '../schemas/passSchema.js';
import bodyReqValidation from '../middleware/bodyReqValidation.js';
import inactivatedAccount from '../middleware/inactivatedAccount.js';

const updatePassRoute = express();

updatePassRoute.patch('/updatePass', inactivatedAccount, bodyReqValidation(passSchema), updatePass);

export default updatePassRoute;