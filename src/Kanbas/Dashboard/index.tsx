import React, { useState } from 'react';
import './index.css';
import { courses } from '../Database';
import { Link, useLocation, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { FaBars, FaBook, FaClock, FaFilePen, FaInbox, FaYoutube } from 'react-icons/fa6';
import { FaQuestionCircle, FaRegArrowAltCircleRight, FaRegCalendarAlt, FaRegUserCircle, FaTachometerAlt } from 'react-icons/fa';

const Dashboard = () => {
    const {pathname} = useLocation();
    const [isDNavVisible, setIsDNavVisible] = useState(false);

    const toggleDNavVisibility = () => {
      setIsDNavVisible(!isDNavVisible);
    }

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
                    marginLeft: "10px", 
                    marginTop: "15px"
                  }}
                  onClick={toggleDNavVisibility}
                  />
                  <p style={{
                    color: "white", marginLeft: "18%", marginTop: "12px"
                  }}>
                    Dashboard
                  </p>
                  <div className="float-end" style={{
                    marginLeft: "22%",
                    display: "flex"

                  }}>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isDNavVisible && (
            <div className="d-flex d-md-none main-container2">
            <div className="d-flex">
                <ul className="navi-menu">
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}
                    onClick={toggleDNavVisibility}
                    > 
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
              </div>
            </div>
          )}
        <div className='wd-flex-grow-1 dashboard'>
            <h1>Dashboard</h1>
            <hr />
            <div className='wd-flex-grow-1 pub'>
                <h2>Published Courses (4)</h2>
                <hr />
                <div className='d-flex flex-row flex-wrap justify-content-around card-container'>
                    {courses.map((course) => (
                        <div className="card" key={course._id}>
                            <img src={`/imgs/${course.image}`} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h6><Link to={`/Kanbas/Courses/${course._id}/Home`} className="title-name">
                                        {course.name}
                                    </Link>
                                </h6>
                                <p className="card-text">{course.description}</p>
                                <Button style={{ background: 'white', border: 'white' }}>
                                <FaFilePen
                                style={{ color: 'grey', fontSize: '20px' }}
                                ></FaFilePen>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Dashboard