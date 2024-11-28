const { body} = require('express-validator');
const validationSchme = () => {
    return [
        body("name").notEmpty().withMessage("Name is required"),
        body("time").notEmpty().isNumeric().withMessage("Time must be a number")
    ]
};

module.exports ={ validationSchme};