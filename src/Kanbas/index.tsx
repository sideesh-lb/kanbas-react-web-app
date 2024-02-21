import { Navigate, Route, Routes } from "react-router";
import Nav from "../Nav"
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";

function Kanbas() {
   return(
      <div className="d-flex">
         <KanbasNavigation/>
         <div style={{ flexGrow: 1 }}>
            {/* <Dashboard/> */}
            <Routes>
               <Route path="/" element={<Navigate to="Dashboard" />} />
               <Route path="Account" element={<h1>Account</h1>} />
               <Route path="Dashboard" element={<Dashboard />} />
               <Route path="Courses/:courseId/*" element={<Courses />} />
            </Routes>
         </div>
      </div>
   );
}
export default Kanbas