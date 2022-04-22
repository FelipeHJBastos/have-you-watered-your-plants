import express from 'express';
import firebase from './services/firebase'

import { loginRouter } from './routes/login';

const app = express();

app.use(express.json());

app.use('/login', loginRouter)

app.listen(3000, () => { console.log("Server is running...") });