import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('<h1>[[Initial Homepage]]</h1>');
});

app.listen(PORT, () => console.log(`Application is listening on ${PORT}..`));