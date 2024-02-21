import React from 'react';
import './index.css';
import { courses } from '../Database';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { FaFilePen } from 'react-icons/fa6';

const Dashboard = () => {
  return (
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
  )
}

export default Dashboard