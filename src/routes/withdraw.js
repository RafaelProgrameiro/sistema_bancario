import express from 'express';

import withdraw from '../controllers/withdraw.js';


import bodyReqValidation from '../middleware/bodyReqValidation.js';
import transactionSchema from '../schemas/transactionSchema.js';


const withdrawRoute = express();

withdrawRoute.post('/withdraw', bodyReqValidation(transactionSchema), withdraw);

export default withdrawRoute;