const  express = require ("express")
const {validationSchme} = require("../middliewares/validation")


const router = express.Router();
const courseControllers = require("../controllers/courses.comtrollers")


router.route('/')
        .get( courseControllers.getAllcourses)
        .post(
            validationSchme(),courseControllers.addCourse
        
        );


router.route('/:courseId')
    .get(courseControllers.getCourse)
    .patch(courseControllers.updateCourse)
    .delete (courseControllers.deleteCourse)




module.exports = router;