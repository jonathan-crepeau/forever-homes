import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
const PORT = process.env.PORT;

import {router as viewsRouter} from './routes/views';
import {router as authRouter} from './routes/api';
import {logger} from './middleware/utils';

// SECTION Serve Public Directory To Client Side
app.use(express.static('public'));

// SECTION Middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// SECTION Views Routes
app.use('/', viewsRouter);

// SECTION API Endpoint Routes
app.use('/api/v1', authRouter);

app.listen(PORT, () => console.log(`Application is listening on ${PORT}..`));