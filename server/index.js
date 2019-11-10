const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port} | APP_STATE: ${process.env.APP_STATE}`)
})