import { Link } from 'react-router-dom';
import { Route, Routes, useParams } from 'react-router';
import '../../../../index.css';
import './index.css';
// import {assignments} from '../../../Database';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FaBook,
  FaCircleCheck,
  FaEllipsisVertical,
  FaPlus,
} from 'react-icons/fa6';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  resetAssignment,
} from "../reducer";
import { KanbasState } from "../../../store";
import CourseAssignmentEditor from '../CourseAssingmentEditor';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';


const CourseAssignmentContent = () => {
  const { courseId } = useParams();
  const assignmentsList = useSelector((state: KanbasState) => 
    state.assignmentReducer.assignments);
  const newAssignment = useSelector((state: KanbasState) => 
    state.assignmentReducer.assignment);
  const dispatch = useDispatch();

  const courseAssignments = assignmentsList.filter(
    (assignment) => assignment.course === courseId
  );

  const [showModal, setShowModal] = useState(false);
  const [aId, setAID] = useState<string>('');

  const handleOpenModal = (assignment_id: string) => {
    setShowModal(true);
    setAID(assignment_id);
};

  const handleCloseModal = () => {
    setShowModal(false);
    setAID('');
};

  const handleDelete = () => {
    dispatch(deleteAssignment(aId));
    handleCloseModal();
  };

  return (
    <div className="flex-grow-1" style={{ margin: '30px' }}>
      <Routes>
        <Route path="CreateAssignment" element={<CourseAssignmentEditor/>}/>
      </Routes>
      <div className="d-flex flex-row">
        <div className="search flex-grow-1">
          <input
            type="text"
            className="form-control w-25"
            placeholder="Search for an Assignment"
          />
        </div>
        <div className="d-flex float-end main-content-control">
          <div className="flex-grow-1"></div>
          <button className="btn" style={{ background: '#eeeeee' }}>
            <FaPlus style={{ marginRight: '3px' }} />
            Group
          </button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/CreateAssignment`}>
          <button className="btn btn-danger" onClick={() => dispatch(resetAssignment())}>
            <FaPlus style={{ marginRight: '3px' }} />
            Assignment
          </button>
          </Link>
          <button
            className="btn"
            style={{ background: '#eeeeee', height: '38px' }}
          >
            <FaEllipsisVertical />
          </button>
        </div>
      </div>

      <hr />
      <ul className="wd_flex_grow_1 list-group module-list">
        <li className="list-group-item list-group-item-secondary">
          <FontAwesomeIcon
            icon={faGripVertical}
            style={{ marginRight: '5px' }}
          />
          <span>
            <strong>Assignments</strong>
          </span>
          <div className="float-end">
            <button
              className="btn rounded-pill"
              style={{ background: '#eeeeee', marginRight: '20px' }}
            >
              40% of Total
            </button>
            <FaPlus style={{ marginRight: '20px' }} />
            <FaEllipsisVertical />
          </div>
        </li>
        <ul
          className="list-group"
          style={{ borderRadius: '0', borderLeft: '5px solid green' }}
        >
          {courseAssignments.map((assignment) => (
            <li className="list-group-item" key={assignment._id}>
              <div className="flex-container">
                <div className="float-end">
                  <FaCircleCheck
                    style={{ color: 'green', marginRight: '10px' }}
                  />
                  <FaEllipsisVertical />
                  <Button className='btn btn-danger btn-sm deleteButton' 
                      onClick={
                        () => handleOpenModal(assignment._id)}>
                    Delete
                  </Button>

                  
                  <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseModal}>No</Button>
                      <Button variant="danger" onClick={() => handleDelete()}>Yes</Button>
                    </Modal.Footer>
                  </Modal>

                </div>
                <FontAwesomeIcon
                  icon={faGripVertical}
                  style={{ marginRight: '20px' }}
                />
                <FaBook style={{ color: 'green', marginRight: '10px' }} />
                <span style={{ display: 'inline' }}>
                  <strong>
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      style={{ color: 'black' }}
                    >
                      <strong>{assignment.title}</strong>
                    </Link>
                  </strong>
                  <div className='wd_flex_row_container'>
                      <div
                      style={{
                        marginLeft: '70px',
                        color: '#686464',
                        width: '100%',
                      }}
                    >
                      <span style={{ fontSize: '15px', marginBottom: '1px' }}>
                        {assignment?.description}
                      </span>
                      <p>Due: {new Date(assignment.dueDate).toDateString()}</p>
                      <p>Points: {assignment.points}</p>
                    </div>
                      </div>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </ul>
      <br />
      <br />
    </div>
  );
};

export default CourseAssignmentContent;