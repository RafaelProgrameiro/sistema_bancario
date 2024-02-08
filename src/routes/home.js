import express from 'express';
import home from '../controllers/home.js';

const homeRoute = express();

homeRoute.get('/', home);

export default homeRoute;