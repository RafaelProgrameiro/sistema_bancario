import express from 'express'
import { clientSignIn } from '../controllers/clients'

const clientRoute = express();

clientRoute.post('/signin', clientSignIn)

export default clientRoute;