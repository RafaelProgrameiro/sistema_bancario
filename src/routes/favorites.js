import express from 'express';

import {getAllFavorites, addFavorites, deleteFavorites} from '../controllers/favorites.js';

import bodyReqValidation from '../middleware/bodyReqValidation.js';
import accountSchema from '../schemas/accountSchema.js';
import existBodyAccount from '../middleware/existBodyAccount.js';

const favoritesRoute = express();

favoritesRoute.get('/allFavorites', getAllFavorites);
favoritesRoute.post('/addFavorites', bodyReqValidation(accountSchema), existBodyAccount, addFavorites);
favoritesRoute.delete('/deleteFavorites', bodyReqValidation(accountSchema), existBodyAccount, deleteFavorites);

export default favoritesRoute;