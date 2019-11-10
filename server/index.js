const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log("Connected to Database");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port} | PROD_STATE: ${process.env.PROD_STATE}`)
})