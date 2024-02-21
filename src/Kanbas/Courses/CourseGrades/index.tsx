import React from 'react';
import { assignments, enrollments, grades, users } from "../../Database";
import { Link, useParams } from "react-router-dom";
import './index.css';
import { FaFileImport, FaFileExport, FaGear, FaFilter} from 'react-icons/fa6';

const Grades = () => {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div className="wd_flex_grow_1" style={{
      marginLeft: '30px',
      marginRight: '30px',
      flexDirection: 'column'
    }}>
      <div className='wd_flex_row_container' style={{
        flexGrow: '1'
      }}>
      <div className="wd_flex_grow_1"></div>
      <div className="d-flex float-end main-content-control">
        <div className="flex-grow-1"></div>
          <button className="btn" style={{
            background: "#eeeeee",
            marginRight: "5px"
          }}>
            <FaFileImport style={{
              marginRight:"3px"
            }}/>Import
          </button>
          <div className='dropdown'>
            <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  background: "#eeeeee",
                  marginRight: "3px",
                }}
                >
                <FaFileExport style={{
                  marginRight:"3px"
                }}/>Export
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">Action</Link></li>
              <li><Link className="dropdown-item" to="#">Another action</Link></li>
            </ul>
            <button className="btn" style={{
              background: '#eeeeee',
              height: '38px'
            }}>
              <FaGear/>
            </button>
          </div>
      </div>
      </div>
      <div className="row">
          <div className="col">
            <label className="form-label">Student Names</label>
              <input
                placeholder="Search Students"
                type="text"
                className="form-control"
              />
          </div>
          <div className="col">
            <label className="form-label">Assignment Names</label>
              <input
                placeholder="Search Assignments"
                type="text"
                className="form-control"
              />
          </div>
        </div>
        <br />
        <button className="btn" style={{
          background: '#eeeeee'
        }}>
          <FaFilter style={{
            marginRight: "5px"
          }}/>Apply Filters
        </button>
        <hr />
        <div className="table-responsive grade-table">
          <table className="table table-striped table-bordered">
            <thead>
            <tr className="table-secondary">
              <th >Student Name</th>
              {
                as.map((assignment) => (<th>{assignment.title}</th>))
              }
            </tr>
            </thead>
            <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td style={{
                    color: '#b52828'
                   }}>{user?.firstName} {user?.lastName}</td>
                   {
                    as.map((assignment) => {
                      const grade = grades.find(
                        (grade) => grade.student === user!._id && grade.assignment == assignment._id
                      );
                      return (
                        <td>{grade?.grade || "-"}</td>
                      )
                    })
                   }
                </tr>
                );
            })}
          </tbody>

          </table>
        </div>
    </div>
  )
}

export default Grades