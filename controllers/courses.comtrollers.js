
let courses = require("../data/courses")
const { body, validationResult } = require('express-validator');

const getAllcourses = (req, res) => {
    res.json(courses);
};

const getCourse = (req, res) => {
    const courseId = +req.params.courseId;
    const course = courses.find(course => course.id === courseId);

    if (!course) {
        return res.status(404).send("Course not found");
    }

    res.json(course);
};

const addCourse = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const newCourse = { id: courses.length + 1, ...req.body };
    courses.push(newCourse);

    res.status(201).json(newCourse);
};


const updateCourse = (req, res) => {
    const courseId = +req.body.courseId;
    let courseIndex = courses.find(course => course.id === courseId);
    if (courseIndex<0) {
        return res.status(404).send("Course not found");
    }

    courses[courseIndex] = { ...courses[courseIndex], ...req.body };

    return res.json(courses[courseIndex]);

};


const deleteCourse = (req, res) => {
    const courseId = +req.body.courseId;
    courses = courses.filter((course) => course.id !== courseId);
    // courses = courses.filter(course => course.id !== courseId);
    res.status(200).json({ suc: true });
};

module.exports = {
    deleteCourse,
    updateCourse,
    addCourse,
    getCourse,
    getAllcourses

}