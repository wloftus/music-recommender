const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')

const port = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({limit: '5mb', extended: false }));
app.use(express.static('public'))

app.use('/api/v1/', indexRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});