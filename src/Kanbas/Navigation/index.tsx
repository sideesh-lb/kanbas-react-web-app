import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./index.css";
import NULogo from "../../imgs/NULogo.png";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaYoutube, FaRegArrowAltCircleRight, FaQuestionCircle } from "react-icons/fa";

const KanbasNavigation = () => {
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

  const { pathname } = useLocation();

  return (
    <div className='kanbas-nav-div'>
      <ul className="wd-kanbas-navigation">
      <div className="wd-logo-container">
        <a href="http://northeastern.edu"><img src={NULogo} className="wd-logo" /></a>
      </div>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`} className='wd-kanbas-navigation-a'> 
            <div className={(link.label).includes('Account') ? "wd-kanbas-navigation-a-i-account" : "wd-kanbas-navigation-a-i"}>
              {link.icon}
            </div>
            {link.label} 
          </Link>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default KanbasNavigation