import express, { NextFunction, Request, Response } from 'express';
import logger from './config/logger';
import { HttpError } from 'http-errors';
import { globalErrorHandler } from './middlewares/globalErrorHandler';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to home');
});

app.use(globalErrorHandler);

export default app;
