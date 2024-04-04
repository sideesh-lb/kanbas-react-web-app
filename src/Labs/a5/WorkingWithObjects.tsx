import axios from 'axios';
import React, { useEffect, useState } from 'react'

const WorkingWithObjects = () => {
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
    const MODULE_URL = "http://localhost:4000/a5/module";

    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    })

    const fetchAssingment = async() => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };

    const updateTitle = async() => {
        const response = await axios
                        .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };

    const [module, setModule] = useState({
        id: 1, name: "Node JS",
        description: "Learn Node JS here",
        course: "CS5610",
    })

    useEffect(() => {
        fetchAssingment();
    }, []);

  return (
    <div>
        <h3>Working With Objects</h3>
        <h3>Modifying Properties</h3>
        <input onChange={(e) => setAssignment({
        ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
        <button onClick={updateTitle} >
        Update Title to: {assignment.title}
        </button>
        <button onClick={fetchAssingment} >
        Fetch Assignment
        </button>

        <h4>Retrieving Objects</h4>
        <a className="btn btn-primary" href="http://localhost:4000/a5/assignment">
            Get Assignment
        </a>

        <h4>Retrieving Properties</h4>
        <a className="btn btn-primary" href="http://localhost:4000/a5/assignment/title">
            Get Title
        </a>

        <h4>Modifying Properties</h4>
        <a className='btn btn-primary' href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
            Update Title
        </a>
        <br />
        <input type="text"
            onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
            value={assignment.title}/>

        <h3>On your Own</h3>
        <h4>Retrieving Module</h4>
        <a className="btn btn-primary" href="http://localhost:4000/a5/module">
            Get Module
        </a>

        <h4>Retrieving Module Name</h4>
        <a className="btn btn-primary" href="http://localhost:4000/a5/module/name">
            Get Module Name
        </a>

        <h4>Modifying Module Name</h4>
        <a className='btn btn-primary' href={`${MODULE_URL}/title/${module.name}`}>
            Update Name
        </a>
        <br />
        <input type="text"
            onChange={(e) => setModule({ ...module,
            name: e.target.value })}
            value={module.name}/>

        <h4>Modifying Score</h4>
        <a className='btn btn-primary' href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
            Update Score
        </a>
        <br />
        <input type="text"
            onChange={(e) => setAssignment({ ...assignment,
            score: Number(e.target.value) })}
            value={assignment.score}/>

        <h4>Updated Completion</h4>
        <a className='btn btn-primary' href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
            Update Completion
        </a>
        <br />
        <label>Assignmet Copmleted</label>
        <input type="checkbox" id="comp" 
        onChange={(e) => setAssignment({ ...assignment,
            completed: e.target.checked })}
            checked={assignment.completed}
        />
        <br/>
    </div>
  )
}

export default WorkingWithObjects