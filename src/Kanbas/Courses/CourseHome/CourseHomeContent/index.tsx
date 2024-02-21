import { Dropdown } from 'react-bootstrap';
import { FaCircleCheck, FaEllipsisVertical, FaPlus } from 'react-icons/fa6';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { modules } from '../../../Database';
import { useParams } from 'react-router';
import React, { useState } from 'react';
import {
  faCheckCircle,
  faEllipsisV,
  faGripVertical,
} from '@fortawesome/free-solid-svg-icons';

interface ExpandedModules {
    [key: number]: boolean;
  }

const CourseHomeContent = () => {
  const { courseId } = useParams();
  const [expandedModules, setExpandedModules] = useState<ExpandedModules>({});


  const toggleModule = (index: number) => {
    setExpandedModules((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <div className="flex-grow-1" style={{ margin: '20px 30px' }}>
      <div className="d-flex float-end main-content-control">
        <button
          className="btn"
          style={{ background: '#eeeeee', marginRight: '5px' }}
        >
          Collapse All
        </button>
        <button
          className="btn"
          style={{ background: '#eeeeee', marginRight: '5px' }}
        >
          View Progress
        </button>

        <Dropdown>
          <Dropdown.Toggle
            style={{
              background: '#eeeeee',
              color: 'black',
              borderStyle: 'none',
              marginRight: '5px',
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

        <button className="btn btn-danger" style={{ marginRight: '5px' }}>
          <FaPlus style={{ marginRight: '3px' }}></FaPlus>Module
        </button>
        <button className="btn" style={{ background: '#eeeeee', height: '38px' }}>
          <FaEllipsisVertical></FaEllipsisVertical>
        </button>
      </div>
      <br />
      <hr />
      <ul className="list-group module-list">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div key={index}>
              <li
                className="list-group-item list-group-item-secondary"
                onClick={() => toggleModule(index)}
              >
                <div className="flex-container">
                  <FontAwesomeIcon
                    icon={faGripVertical}
                    style={{ marginRight: '10px' }}
                  />
                  {module.name}
                  <div className="float-end">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: 'green', marginRight: '16px' }}
                    />
                    {expandedModules[index] ? '-' : '+'}
                    <FontAwesomeIcon
                      icon={faEllipsisV}
                      style={{ color: '#787878', marginLeft: '16px' }}
                    />
                  </div>
                </div>
              </li>

              {expandedModules[index] &&
                module.learningObjectives &&
                module.learningObjectives.map((lesson, lessonIndex) => (
                  <li
                    key={lessonIndex}
                    className="list-group-item"
                    style={{ borderLeft: '5px green solid' }}
                  >
                    <div className="flex-container">
                      <FontAwesomeIcon
                        icon={faGripVertical}
                        style={{ marginRight: '15px' }}
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

export default CourseHomeContent;