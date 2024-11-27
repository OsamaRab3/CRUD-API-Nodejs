# Course Management API

This is a simple Course Management API built using Node.js and Express, which supports CRUD (Create, Read, Update, Delete) operations for managing courses. The API includes validation for course data to ensure proper input.

## Features

- **Create a Course**: Add a new course with validation for name and time.
- **Read All Courses**: Fetch a list of all courses.
- **Read a Single Course**: Fetch a specific course by its ID.
- **Update a Course**: Modify the details of an existing course.
- **Delete a Course**: Remove a course by its ID.

## Technologies Used

- **Node.js**: JavaScript runtime used to build the server.
- **Express**: Web framework for handling routes and requests.
- **express-validator**: Middleware for validating and sanitizing user input.
- **JSON**: Data format used for communication between client and server.

## Endpoints

### 1. Get All Courses
- **URL**: `/api/courses`
- **Method**: `GET`
- **Description**: Retrieves all the courses.
- **Response**: A JSON array of all courses.

### 2. Get a Single Course
- **URL**: `/api/courses/:courseId`
- **Method**: `GET`
- **URL Params**: `courseId` (ID of the course)
- **Description**: Retrieves a single course by its ID.
- **Response**: A JSON object with course details or a 404 error if the course is not found.

### 3. Create a Course
- **URL**: `/api/courses`
- **Method**: `POST`
- **Body Params**: 
  - `name` (string, required): Name of the course.
  - `time` (number, required): Duration of the course in hours.
- **Description**: Creates a new course and adds it to the list.
- **Validation**: 
  - `name`: Must be provided.
  - `time`: Must be a numeric value.
- **Response**: A JSON object with the newly created course.

### 4. Update a Course
- **URL**: `/api/courses/:courseId`
- **Method**: `PATCH`
- **Body Params**: 
  - `name` (string, optional): Name of the course.
  - `time` (number, optional): Updated duration of the course.
- **URL Params**: `courseId` (ID of the course)
- **Description**: Updates the details of a specific course.
- **Response**: A JSON object with the updated course or a 404 error if the course is not found.

### 5. Delete a Course
- **URL**: `/api/courses/:courseId`
- **Method**: `DELETE`
- **URL Params**: `courseId` (ID of the course)
- **Description**: Deletes a course by its ID.
- **Response**: A success message with `suc: true`.

