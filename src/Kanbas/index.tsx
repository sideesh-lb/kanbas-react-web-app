import { Navigate, Route, Routes } from "react-router";
import Nav from "../Nav"
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { db } from './Database';
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";


function Kanbas() {
   const [courses, setCourses] = useState(db.courses)


    const [course,setCourse] = useState({_id: "", name: "", number: "",
    startDate: "", endDate: "",
    description: "",
    image: ""});

    const addNewCourse = () => {
      const newCourse = { ...course, _id: new Date().getTime().toString() };
      setCourses([...courses, { ...course, ...newCourse }]);

    };

    const deleteCourse = (courseId: string) => {
      setCourses(courses.filter((course) => course._id !== courseId));
    };
  
    const updateCourse = () => {
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
               <Route path="/" element={<Navigate to="Dashboard" />} />
               <Route path="Account" element={<h1>Account</h1>} />
               <Route path="Dashboard" element={<Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} />} />
               <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            </Routes>
         </div>
      </div>
      </Provider>
      
   );
}
export default Kanbas