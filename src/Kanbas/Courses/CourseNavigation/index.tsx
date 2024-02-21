import React from 'react';
import "./index.css";
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const CourseNavigation = () => {
    const links = ["Home", "Modules", "Piazza", 
    "ZoomMeetings", "Assignments", "Quizzes", 
    "Grades", "People", "Discussions", "Announcements", 
    "Pages", "Files", "Rubrics", "Outcomes", "Collaborations",
    "Syllabus", "Settings"];

    const { pathname } = useLocation();
  return (
    <div className='d-flex courseNav'>
        <ul className="wd-navigation d-none d-md-block">
            {links.map((link, index) => (
            <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
            <Link to={link} className='wd-navigation-a'> 
                {link}
            </Link>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default CourseNavigation