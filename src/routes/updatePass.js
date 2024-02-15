import express from 'express';
import updatePass from '../controllers/updatePass.js';

import passSchema from '../schemas/passSchema.js';
import bodyReqValidation from '../middleware/bodyReqValidation.js';

const updatePassRoute = express();

updatePassRoute.patch('/updatePass', bodyReqValidation(passSchema), updatePass);

export default updatePassRoute;