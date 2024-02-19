import express from 'express';

import {favorites, addFavorites, deleteFavorites} from '../controllers/favorites.js';

import bodyReqValidation from '../middleware/bodyReqValidation.js';
import accountSchema from '../schemas/accountSchema.js';
import existBodyAccount from '../middleware/existBodyAccount.js';

const favoritesRoute = express();

favoritesRoute.get('/allFavorites', favorites);
favoritesRoute.post('/addFavorites', bodyReqValidation(accountSchema), existBodyAccount, addFavorites);
favoritesRoute.delete('/deleteFavorites', bodyReqValidation(accountSchema), existBodyAccount, deleteFavorites);

export default favoritesRoute;