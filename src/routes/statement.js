import express from 'express';

import statement from '../controllers/statement.js';

const statementRoute = express();

statementRoute.get('/statement', statement);

export default statementRoute;