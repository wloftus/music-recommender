const express = require('express');
const dotenv = require('dotenv');

const port = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({limit: '5mb', extended: false }));

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});