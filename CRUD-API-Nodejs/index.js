const express = require("express");
//const { body, validationResult } = require('express-validator');

const courseRouter = require ("./router/courses.router")
const app = express();
const port = 7000;

app.use(express.json());


app.use('/api/courses',courseRouter);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
