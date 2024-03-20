import { Button } from 'react-bootstrap';
import '../../../../index.css';
import { FaCircleCheck, FaEllipsisVertical } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
 
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  resetAssignment,
} from "../reducer";
import { KanbasState } from "../../../store";
import { useEffect } from 'react';
 
const CourseAssignmentEditor = () => {
  const { assignmentId, courseId } = useParams();
  const assignmentsList = useSelector((state: KanbasState) =>
  state.assignmentReducer.assignments);
const dispatch = useDispatch();
 
const assignment = useSelector((state: KanbasState) =>
  state.assignmentReducer.assignment
)
 
  useEffect(( ) => {
    if(assignmentId){
      dispatch(setAssignment(assignmentsList.find(assignment => assignment._id === assignmentId)));
    }
  },[])
 
  const navigate = useNavigate();
 
  const handleSave = (assignment: any) => {
    assignment?._id ? dispatch(updateAssignment({ ...assignment, course: courseId }))
    : dispatch(addAssignment({ ...assignment, course: courseId }));
 
    dispatch(resetAssignment());
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
 
  return (
    <div className="flex-grow-1" style={{ margin: '20px 30px' }}>
      {/* <div className="wd_flex_row_container"> */}
        <div className="d-flex flex-row">
          <div
            className="flex-grow-1"
            style={{ marginLeft: '30px', marginRight: '30px' }}
          >
            <div className="wd_flex_row_container">
              <div className="wd_flex_grow_1"></div>
              <div className="d-flex float-end main-content-control">
                <div className="flex-grow-1"></div>
                <p
                  style={{
                    marginTop: '7px',
                    marginRight: '10px',
                    color: 'green',
                  }}
                >
                  {/* {assignment.description} */}
                  <FaCircleCheck style={{ marginRight: '3px' }} />
                  Published
                </p>
                <Button style={{ background: '#eeeeee', height: '38px' }}>
                  <FaEllipsisVertical style={{ color: 'black' }} />
                </Button>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Assignment Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e:any) =>
                  dispatch(setAssignment({ ...assignment, title: e.target.value }))
                }
                value={assignment?.title}
                
              />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows={3}
              onChange={(e:any) =>
                dispatch(setAssignment({ ...assignment, description: e.target.value }))
              }
              value ={assignment?.description}
              >
                {assignment?.description}
              </textarea>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-2">Points</div>
                <div className="col-6">
                  <input type="text" className="form-control" value={assignment?.points}
                  onChange={(e) =>
                    dispatch(setAssignment({ ...assignment, points: e.target.value }))
                  }/>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2">Assignment Group</div>
                <div className="col-6">
                  <select className="form-select">
                    <option>Assignments</option>
                    <option>Quizzes</option>
                    <option>Exams</option>
                    <option>Project</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2">Display Grade as</div>
                <div className="col-6">
                  <select className="form-select">
                    <option>Percentage</option>
                    <option>Marks</option>
                    <option>GPA</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2"></div>
                <div className="col-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      Don't count this assignment towards the final grade
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2">Submission Type</div>
                <div className="col-6">
                  <select className="form-select">
                    <option>Online</option>
                    <option>Offline</option>
                  </select>
                  <br />
                  <strong>Online Entry Options</strong>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label"> Text Entry </label>
                  </div>
                  <br />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                    />
                    <label className="form-check-label"> Website URL </label>
                  </div>
                  <br />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                    />
                    <label className="form-check-label">
                      {' '}
                      Media Recordings{' '}
                    </label>
                  </div>
                  <br />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      {' '}
                      Student Annotation{' '}
                    </label>
                  </div>
                  <br />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label"> File Uploads </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2">Submission Attempts</div>
                <div className="col-6">
                  <select className="form-select">
                    <option>Unlimited</option>
                    <option>Limited</option>
                    <option>None</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2">Plaigarism Review</div>
                <div className="col-6">
                  <select className="form-select">
                    <option>None</option>
                    <option>Yes</option>
                    <option>Done</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2">Group Assignment</div>
                <div className="col-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      This is a group assignment
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2">Peer Reviews</div>
                <div className="col-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      {' '}
                      Require Peer Reviews{' '}
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2">Assign</div>
                <div className="col-6">
                  Assign To
                  <select className="form-select">
                    <option selected>Everyone</option>
                    <option>Yes</option>
                    <option>Done</option>
                  </select>
                  <br />
                  Due
                  <input type="date" className="form-control" value={(assignment?.dueDate)}
                  onChange={(e) =>
                    dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))
                  }
                  />
                  <br />
                  <div className="row">
                    <div className="col-3">
                      Available From{' '}
                      <input type="date" className="form-control" value={(assignment?.availableFromDate)}
                      onChange={(e) =>
                        dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))
                      }
                      />
                    </div>
                    <div className="col-3">
                      Until
                      <input type="date" className="form-control" value={(assignment?.availableUntilDate)}
                      onChange={(e) =>
                        dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))
                      } />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <div className="row">
                <div className="col-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      Notify users that this content has changed.
                    </label>
                  </div>
                </div>
                <div className="col-6 float-end">
                  <button className="btn" onClick={() => dispatch(resetAssignment())}
                  >
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="btn btn-secondary"
                    >
                      Cancel
                    </Link>
                  </button>
                  <button className="btn btn-danger" onClick={() => handleSave(assignment)}>
                    Save
                  </button>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};
 
export default CourseAssignmentEditor;