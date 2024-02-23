import { courses } from "../Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./CourseNavigation";
import { FaBars, FaChevronDown, FaGlasses } from 'react-icons/fa6';
import './index.css'
import { Link } from "react-router-dom";
import CoursesModules from "./CourseModules";
import CoursesHome from "./CourseHome";
import CoursesAssignments from "./CourseAssingments";
import CourseAssignmentEditor from "./CourseAssingments/CourseAssingmentEditor";
import Grades from "./CourseGrades";

const Courses = () => {
    const { courseId } = useParams();
    const {pathname} = useLocation();
    const [empty, kanbas, courses_str, id, screen] = pathname.split('/');
    const course =  courses.find((course) => course._id === courseId)
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
                    marginLeft: "10px", 
                    marginTop: "12px"
                  }}/>
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
                    }}/>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
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