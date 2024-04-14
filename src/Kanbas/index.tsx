import { Navigate, Route, Routes } from "react-router";
import Nav from "../Nav"
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
// import { db } from './Database';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Account from "./Account";
import { BASE_API } from "../Users/client";

const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {
   const [courses, setCourses] = useState<any[]>([]);
   const COURSES_API = `${API_BASE}/api/courses`;


    const [course,setCourse] = useState({_id: "", name: "", number: "",
    startDate: "", endDate: "",
    description: "",
    image: ""});

    const findAllCourses = async() => {
      const response = await axios.get(COURSES_API);
      setCourses(response.data);
    };

    useEffect(() => {
      findAllCourses();
    }, []);

    const addNewCourse = async() => {
      const response = await axios.post(COURSES_API, course);
      setCourses([...courses, response.data]);

    };

    const deleteCourse = async(courseId: string) => {
      const response = await axios.delete(
        `${COURSES_API}/${courseId}`);
      setCourses(courses.filter((course) => course._id !== courseId));
    };
  
    const updateCourse = async() => {
      const response = await axios.put(
        `${COURSES_API}/${course._id}`,
        course
      );
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
    };
   return(
      <Provider store={store}>
         <div className="d-flex">
         <KanbasNavigation/>
         <div style={{ 
            // flexGrow: 1,
         overflow: 'hidden', 
         width: '100%'
         }}>
            {/* <Dashboard/> */}
            <Routes>
               <Route path="/Account/*" element={<Account />} />
               <Route path="/" element={<Navigate to="Dashboard" />} />
               <Route path="Dashboard" element={<Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} />} />
               <Route path="Courses/:courseId/*" element={<Courses/>} />
            </Routes>
         </div>
      </div>
      </Provider>
      
   );
}
export default Kanbas