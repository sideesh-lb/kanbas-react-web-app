import { Dropdown } from 'react-bootstrap';
import { FaCircleCheck, FaEllipsisVertical, FaPlus } from 'react-icons/fa6';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { modules } from '../../Database';
import { useParams } from 'react-router';
import React, { useState } from 'react';
import {
  faCheckCircle,
  faEllipsisV,
  faGripVertical,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

interface ExpandedModules {
  [key: number]: boolean;
}

const CoursesModules = () => {
  const { courseId } = useParams();
  console.log("courseId " +courseId)
  const [expandedModules, setExpandedModules] = useState<ExpandedModules>({});
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

  const toggleModule = (index: number) => {
    setExpandedModules((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  
  return (
    <div className="" style={{ 
      margin: '20px 30px',
    width: '100%',
    overflow: 'hidden' }}>
      <div className="float-end main-content-control" style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '10px'
      }}>
        <button className="btn" style={{ background: '#eeeeee' }}>
          Collapse All
        </button>
        <button className="btn" style={{ background: '#eeeeee' }}>
          View Progress
        </button>

        <Dropdown>
          <Dropdown.Toggle
            style={{
              background: '#eeeeee',
              color: 'black',
              borderStyle: 'none',
            }}
            id="dropdown-basic"
          >
            <FaCircleCheck
              style={{
                marginRight: '5px',
                color: 'green',
              }}
            ></FaCircleCheck>
            Publish All
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Publish All</Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Publish all items and modules
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">UnPublish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <button className="btn btn-danger">
          <FaPlus style={{ marginRight: '3px' }}></FaPlus>Module
        </button>
        <button className="btn" style={{ background: '#eeeeee', height: '38px' }}>
          <FaEllipsisVertical></FaEllipsisVertical>
        </button>
      </div>
      <br />
      <hr />
      <h4>Add/Update a Module</h4>
      <div className="row">
        <div className="col">
          <input
            value={module.name}
            placeholder="Enter the Module Name"
            className="form-control"
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <textarea
            value={module.description}
            placeholder="Enter the Module Description"
            className="form-control"
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </div>
      </div>
      <div style={{ marginTop: '5px' }}>
        <button
          className="btn btn-success"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          style={{ marginRight: '5px' }}
        >
          Add
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(updateModule(module))}
        >
          Update
        </button>
      </div>
      <br/>
      <ul className="list-group module-list">
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div key={index}>
              <li
                className="list-group-item list-group-item-secondary"
                onClick={() => toggleModule(index)}
              >
                <div className="flex-container" style={{
                  paddingBottom: "10px"
                }}>
                  <FontAwesomeIcon
                    icon={faGripVertical}
                    style={{ marginRight: '10px' }}
                  />
                  {module.name}
                  <br />
                  {module.description}
                  <div className="float-end">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: 'green', marginRight: '8px' }}
                    />
                    {expandedModules[index] ? '-' : '+'}
                    <FontAwesomeIcon
                      icon={faEllipsisV}
                      style={{ color: '#787878', marginLeft: '8px' }}
                    />
                    <button className='btn btn-warning btn-sm'
                            style={{ marginLeft: '10px' }}
                            onClick={() => dispatch(setModule(module))}>
                      Edit
                    </button>
                     <button className='btn btn-danger btn-sm'
                      onClick={() => dispatch(deleteModule(module._id))}>
                      Delete
                    </button>
                  </div>
                </div>
              </li>

              {expandedModules[index] &&
                module.learningObjectives &&
                module.learningObjectives.map((lesson: any, lessonIndex:number) => (
                  <li
                    key={lessonIndex}
                    className="list-group-item"
                    style={{ borderLeft: '5px green solid' }}
                  >
                    <div className="flex-container">
                      <FontAwesomeIcon
                        icon={faGripVertical}
                        style={{ marginRight: '10px' }}
                      />
                      {lesson.name}
                      <div className="float-end">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ color: 'green', marginRight: '8px' }}
                        />
                        <FontAwesomeIcon
                          icon={faEllipsisV}
                          style={{ color: '#787878' }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
            </div>
          ))}
      </ul>
    </div>
  );
};

export default CoursesModules;