import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
 
interface Assignment {
  _id: string,
  title: string,
  course: string,
  description: string,
  dueDate: string,
  points: string,
  availableFromDate: string,
  availableUntilDate: string,
}

interface AssignmentsState {
  assignments: Assignment[];
  assignment : Assignment;
}
 
const initialState: AssignmentsState = {
  assignments: [],
  assignment: {
  _id: "",
  title: "",
  course: "",
  description: "",
  dueDate: "",
  points: "",
  availableFromDate: "",
  availableUntilDate: "" },
};
 
 
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {

    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      console.log(action.payload)
      state.assignments = state.assignments.filter(
        (assignments) => assignments._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = {...action.payload};
    },
    resetAssignment: (state) =>{
      state.assignment = {...initialState.assignment}
    }
  },
});
 
 
export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, resetAssignment, setAssignments } = assignmentsSlice.actions;
 
export default assignmentsSlice.reducer;