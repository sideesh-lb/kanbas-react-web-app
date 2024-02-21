import {
    FaBan,
    FaBell,
    FaBullhorn,
    FaCalendar,
    FaCircleCheck,
    FaCircleMinus,
    FaCloudArrowUp,
    FaCrosshairs,
    FaFileImport,
    FaSquarePollVertical,
    FaXmark,
  } from 'react-icons/fa6';
  
  const CourseStatusSection = () => {
    return (
      <div className="status-content d-none d-lg-block" style={{ margin: '20px' }}>
        <h5>Course Status</h5>
  
        <button
          className="btn"
          style={{ background: '#eeeeee', marginRight: '5px' }}
        >
          <FaBan style={{ marginRight: '3px' }}></FaBan>Unpublish
        </button>
        <button className="btn" style={{ background: '#82be5d' }}>
          <FaCircleCheck
            style={{
              background: 'white',
              color: 'green',
              borderRadius: '50%',
              marginRight: '3px',
            }}
          ></FaCircleCheck>
          Published
        </button>
        <ul className="list-group status-list" style={{ marginTop: '10px' }}>
          <li className="list-group-item">
            <FaFileImport style={{ marginRight: '8px' }} />
            Import Existing Content
          </li>
          <li className="list-group-item">
            <FaCloudArrowUp style={{ marginRight: '8px' }} />
            Import from Commons
          </li>
          <li className="list-group-item">
            <FaCrosshairs style={{ marginRight: '8px' }} />
            Choose Home Page
          </li>
          <li className="list-group-item">
            <FaSquarePollVertical style={{ marginRight: '8px' }} />
            View Course Stream
          </li>
          <li className="list-group-item">
            <FaBullhorn style={{ marginRight: '8px' }} />
            New Announcement
          </li>
          <li className="list-group-item">
            <FaSquarePollVertical style={{ marginRight: '8px' }} />
            New Analytics
          </li>
          <li className="list-group-item">
            <FaBell style={{ marginRight: '8px' }} />
            View Course Notifications
          </li>
        </ul>
        <br />
        <h5>To Do</h5>
        <hr />
        <div className="d-flex">
          <FaCircleMinus
            style={{
              transform: 'rotate(90deg)',
              color: '#b52828',
              marginRight: '15px',
              marginBottom: '30px',
              height: '25px',
              width: '30px',
            }}
          ></FaCircleMinus>
          <div className="text">
            <h6 style={{ color: '#b52828', marginLeft: '10px' }}>
              Grade A1 - ENV + HTML
            </h6>
            <p style={{ marginLeft: '10px', marginTop: '-10px', color: 'grey' }}>
              100 points Feb 18 at 11:59
            </p>
          </div>
          <FaXmark style={{ marginLeft: '100px' }}></FaXmark>
        </div>
        <br />
        <div>
          <h5>
            Coming Up
            <div className="float-end">
              <FaCalendar style={{ marginRight: '8px' }} />
              <a href="#" style={{ color: '#b52828', fontSize: '15px' }}>
                View Calendar
              </a>
            </div>
          </h5>
        </div>
  
        <hr />
  
        <ul style={{ listStyle: 'none' }}>
          <li>
            <FaCalendar style={{ marginRight: '8px' }} />
            <a href="#" style={{ color: '#b52828' }}>
              Lecture
            </a>
            <p style={{ marginLeft: '20px', fontSize: '15px', color: 'grey' }}>
              CS 4550.12631.202410
            </p>
            <p
              style={{
                marginLeft: '20px',
                fontSize: '15px',
                color: 'grey',
                marginTop: '-18px',
              }}
            >
              Feb 19 at 11:45AM
            </p>
          </li>
          <li>
            <FaCalendar style={{ marginRight: '8px' }} />
            <a href="#" style={{ color: '#b52828' }}>
              CS 5610 06 SP24 Lecture
            </a>
            <p style={{ marginLeft: '20px', fontSize: '15px', color: 'grey' }}>
              CS 5610.12631.202410
            </p>
            <p
              style={{
                marginLeft: '20px',
                fontSize: '15px',
                color: 'grey',
                marginTop: '-18px',
              }}
            >
              Feb 21 at 11:45AM
            </p>
          </li>
          <li>
            <FaCalendar style={{ marginRight: '8px' }} />
            <a href="#" style={{ color: '#b52828' }}>
              CS 5610 Web Development Lecture
            </a>
            <p style={{ marginLeft: '20px', fontSize: '15px', color: 'grey' }}>
              CS 5610.12631.202410
            </p>
            <p
              style={{
                marginLeft: '20px',
                fontSize: '15px',
                color: 'grey',
                marginTop: '-18px',
              }}
            >
              Feb 21 at 11:45AM
            </p>
          </li>
        </ul>
      </div>
    );
  };
  
  export default CourseStatusSection;