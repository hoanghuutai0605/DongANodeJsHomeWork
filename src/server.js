const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { ApiV1 } = require('./routers/v1/routes');
const port = 8080;

dotenv.config();

mongoose.connect(
    process.env.MONGODB_KEY,
    { useNewUrlParser: true },
    () => {
        console.log("connected to mongodb!");
    }
);

app.use(express.json());
app.use('/api/v1', ApiV1);

app.listen(port, () => {console.log(`server up and running on port ${port}!`)});