import courses from './courses.json';
import modules from './modules.json';
import assignments from './assignments.json';
import users from './users.json';
import enrollments from './enrollments.json';
import grades from './grades.json';

const db = {
    courses, modules, assignments,
    users, enrollments, grades
};

export {
    courses, modules, assignments,
    users, enrollments, grades, db
};

