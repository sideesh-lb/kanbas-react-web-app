import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/CourseModules/reducer";
import assignmentReducer from "../Courses/CourseAssingments/reducer"

export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };

  assignmentReducer: {
    assignments: any[];
    assignment: any;
  }

}
const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentReducer,
  }
});


export default store;

