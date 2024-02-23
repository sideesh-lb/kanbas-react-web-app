import React from 'react'
import { FaHome } from 'react-icons/fa'
import './index.css';
import { Link, useParams } from 'react-router-dom';
import { FaFilePen, FaNetworkWired } from 'react-icons/fa6';

const CourseNavMenu = () => {
    const {courseId} = useParams();
  return (
    <div className="d-flex main-container2">
            <div className="d-flex">
                <ul className="navi-menu">
                    <li >
                        <FaHome/>
                        <Link to={`/Kanbas/Courses/${courseId}/Home`}>
                          Home</Link></li>

                          <li >
                        <FaNetworkWired/>
                        <Link to={`/Kanbas/Courses/${courseId}/Modules`}>
                          Modules</Link></li>
                          <li >
                        <FaFilePen/>
                        {/* <i class="fa-solid fa-home"></i> */}
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                            Assignments</Link></li>
                        {/* 
                        <li><a href="#">
                            <i class="fa-solid fa-plug"></i>
                            Piazza</a></li>
                        <li><a href="#">
                            <i class="fa-solid fa-plug"></i>
                            Zoom Meetings</a></li>
                        <li><a href="/Kanbas/Courses/Assignments/screen.html">
                            <i class="fa-solid fa-file-pen"></i>
                            Assignments</a></li>
                        <li><a href="#">
                            <i class="fa-solid fa-paper-plane"></i>
                            Quizzes</a></li>
                        <li><a href="/Kanbas/Courses/Grades/screen.html">
                            <i class="fa-solid fa-rectangle-list"></i>
                            Grades</a></li>
                        <li><a href="#">
                            <i class="fa-solid fa-users-line"></i>
                            People</a></li>
                        <li><a href="#">
                            <i class="fa-brands fa-rocketchat"></i>
                            Discussions</a></li>
                        <li><a href="#">
                            <i class="fa-solid fa-bullhorn"></i>
                            Announcements</a></li>
                        <li><a href="#">
                            <i class="fa-solid fa-file-lines"></i>
                            Pages</a></li>
                        <li><a href="#">
                            <i class="fa-solid fa-folder"></i>
                            Files</a></li>
                        <li><a href="#">
                            <i class="fa-solid fa-newspaper"></i>
                            Rubrics</a></li>
                        <li><a href="#">
                            <i class="fa-solid fa-bullseye"></i>
                            Outcomes</a></li>
                        <li><a href="/#">
                            <i class="fa-regular fa-circle"></i>
                            Collaborations</a></li>
                        <li><a href="#">
                            <i class="fa-solid fa-newspaper"></i>
                            Syllabus</a></li>
                        <li><a href="#">
                            <i class="fa-solid fa-gear"></i>
                            Settings</a></li> */}
                </ul>
            </div>
        </div>
  )
}

export default CourseNavMenu