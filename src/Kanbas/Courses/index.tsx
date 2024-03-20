import { courses } from "../Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./CourseNavigation";
import { FaBars, FaBook, FaBullhorn, FaBullseye, FaChevronDown, FaClock, FaFileLines, FaFilePen, FaFolder, FaGear, FaGlasses, FaInbox, FaNetworkWired, FaNewspaper, FaPaperPlane, FaPlug, FaRectangleList, FaRegCircle, FaRocketchat, FaUsersLine, FaYoutube } from 'react-icons/fa6';
import './index.css'
import { Link } from "react-router-dom";
import CoursesModules from "./CourseModules";
import CoursesHome from "./CourseHome";
import CoursesAssignments from "./CourseAssingments";
import CourseAssignmentEditor from "./CourseAssingments/CourseAssingmentEditor";
import Grades from "./CourseGrades";
import { useState } from "react";
import { FaHome, FaQuestionCircle, FaRegArrowAltCircleRight, FaRegCalendarAlt, FaRegUserCircle, FaTachometerAlt } from "react-icons/fa";

const Courses = ({ courses }: { courses: any[]; }) => {
    const { courseId } = useParams();
    const {pathname} = useLocation();
    const [empty, kanbas, courses_str, id, screen] = pathname.split('/');
    const course =  courses.find((course) => course._id === courseId)

    const [isCourseNavVisible, setIsCourseNavVisible] = useState(false);

    const toggleCourseNavVisibility = () => {
      setIsCourseNavVisible(!isCourseNavVisible);

      if (isNavVisible) {
        toggleNavVisibility()
      }

    };

    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNavVisibility = () => {
      setIsNavVisible(!isNavVisible);

      if (isCourseNavVisible) {
        toggleCourseNavVisibility()
      }
      
    };

    const links = [
      { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
      { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
      { label: "Courses",   icon: <FaBook className="fs-2" />           },
      { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
      { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
      { label: "History",  icon: <FaClock className="fs-2" /> },
      { label: "Studio",  icon: <FaYoutube className="fs-2" /> },
      { label: "Common",  icon: <FaRegArrowAltCircleRight className="fs-2" /> },
      { label: "Help",  icon: <FaQuestionCircle className="fs-2" /> },
    ];

  return (
    <div>
      <div className="d-block d-md-none">
            <div className="wd_flex_row_container">
              <div className="wd_flex_grow_1" style={{
                backgroundColor: "black",
                marginBottom: '10px'
              }}>
                <div className="d-flex justify-content-around">
                  <FaBars style={{
                    color: "#ffffff",
                    marginLeft: "20px", 
                    marginTop: "15px"
                  }}
                  onClick={toggleNavVisibility}
                  />
                  <p style={{
                    color: "white", marginLeft: "25%", marginTop: "8px"
                  }}>
                    {course?.name}
                  </p>
                  <div className="float-end" style={{
                    marginLeft: "22%",
                    display: "flex"

                  }}>
                    <FaGlasses style={{
                      color: "white",
                      marginTop: "12px"
                    }}/>

                    <FaChevronDown style={{
                      color: "white",
                      marginTop: "12px",
                      marginLeft: "12px",
                      marginRight: "12px"
                    }}
                    onClick={toggleCourseNavVisibility}
                    />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isNavVisible && (
            <div className="d-flex d-md-none main-container2">
            <div className="d-flex">
                <ul className="navi-menu">
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}
                    onClick={toggleNavVisibility}
                    > 
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
              </div>
            </div>
          )}

          {isCourseNavVisible && (
            <div className="d-flex d-md-none main-container2">
            <div className="d-flex">
                <ul className="navi-menu">
                    <li >
                        <FaHome/>
                        <Link to={`/Kanbas/Courses/${courseId}/Home`}
                        onClick={toggleCourseNavVisibility}>
                          Home</Link></li>

                          <li >
                        <FaNetworkWired/>
                        <Link to={`/Kanbas/Courses/${courseId}/Modules`}
                        onClick={toggleCourseNavVisibility}>
                          Modules</Link></li>
                          <li >
                          <FaPlug/>
                        {/* <i class="fa-solid fa-home"></i> */}
                        <Link to={`/Kanbas/Courses/${courseId}/Piazza`}
                        onClick={toggleCourseNavVisibility}>
                            Piazza</Link></li>
                        <li>
                        <FaFilePen/>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        onClick={toggleCourseNavVisibility}>
                            Assignments</Link></li>

                            <li>
                        <FaPlug/>
                        <Link to={`/Kanbas/Courses/${courseId}/ZoomMeetings`}
                        onClick={toggleCourseNavVisibility}>
                            Zoom Meetings</Link></li>

                            <li>
                        <FaPaperPlane/>
                        <Link to={`/Kanbas/Courses/${courseId}/Quizzes`}
                        onClick={toggleCourseNavVisibility}>
                            Quizzes</Link></li>

                            <li>
                        <FaRectangleList/>
                        <Link to={`/Kanbas/Courses/${courseId}/Grades`}
                        onClick={toggleCourseNavVisibility}>
                            Grades</Link></li>

                            <li>
                        <FaUsersLine/>
                        <Link to={`/Kanbas/Courses/${courseId}/People`}
                        onClick={toggleCourseNavVisibility}>
                            People</Link></li>

                            <li>
                        <FaRocketchat/>
                        <Link to={`/Kanbas/Courses/${courseId}/Discussions`}
                        onClick={toggleCourseNavVisibility}>
                            Discussions</Link></li>

                            <li>
                        <FaBullhorn/>
                        <Link to={`/Kanbas/Courses/${courseId}/Announcements`}
                        onClick={toggleCourseNavVisibility}>
                            Announcements</Link></li>

                            <li>
                        <FaFileLines/>
                        <Link to={`/Kanbas/Courses/${courseId}/Pages`}
                        onClick={toggleCourseNavVisibility}>
                            Pages</Link></li>

                            <li>
                        <FaFolder/>
                        <Link to={`/Kanbas/Courses/${courseId}/Files`}
                        onClick={toggleCourseNavVisibility}>
                            Files</Link></li>

                            <li>
                        <FaNewspaper/>
                        <Link to={`/Kanbas/Courses/${courseId}/Rubrics`}
                        onClick={toggleCourseNavVisibility}>
                            Rubrics</Link></li>

                            <li>
                        <FaBullseye/>
                        <Link to={`/Kanbas/Courses/${courseId}/OuteComes`}
                        onClick={toggleCourseNavVisibility}>
                            Outcomes</Link></li>

                            <li>
                        <FaRegCircle/>
                        <Link to={`/Kanbas/Courses/${courseId}/Collaborations`}
                        onClick={toggleCourseNavVisibility}>
                            Collaborations</Link></li>

                            <li>
                        <FaNewspaper/>
                        <Link to={`/Kanbas/Courses/${courseId}/Syllabus`}
                        onClick={toggleCourseNavVisibility}>
                            Syllabus</Link></li>

                            <li>
                        <FaGear/>
                        <Link to={`/Kanbas/Courses/${courseId}/Settings`}
                        onClick={toggleCourseNavVisibility}>
                            Settings</Link></li>
                        
                </ul>
            </div>
        </div>
          )}
    <div className="main-content" style={{
      overflowX: 'hidden',
      width: "100%"
    }}>
      <div className="navigation-bar d-none d-md-block wd-nav-align">
                <nav
                  className="wd_breadcrumb top-nav"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <FaBars
                        style={{
                          color: 'rgb(196, 2, 2)',
                          marginRight: '10px',
                        }}
                        
                      ></FaBars>
                      <Link
                        to={`/Kanbas/Courses/${courseId}/Home`}
                        style={{ color: 'rgb(196, 2, 2)' }}
                      >
                        {course!.name}
                      </Link>
                    </li>
                    <span style={{ color: 'grey', margin: '0 5px' }}> &gt; </span>
                    <li className="breadcrumb-item active" aria-current="page">
                    <Link to={pathname} style={{ color: 'grey' }}>
                      {screen}
                    </Link>
                    </li>
                  </ol>
                  <button className="btn" style={{
                    background: '#eeeeee',
                  }}>
                    <FaGlasses style={{
                      background: "#eeeeee",
                      marginRight: '3px',
                    }}>
                    </FaGlasses>
                    Student View
                  </button>
                </nav>
                <hr style={{ marginLeft: '20px', marginRight: '20px' }} />
              </div>
      <div className="wd_flex_row_container">
        <CourseNavigation/>
        <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<CoursesHome />} />
            <Route path="Modules" element={<CoursesModules />} />
            <Route path="Assignments" element={<CoursesAssignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<CourseAssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
      </div>
    </div>
    </div>
  )
}

export default Courses