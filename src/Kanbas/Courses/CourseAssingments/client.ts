import axios from "axios";
import { assignments } from "../../Database";
import { setAssignment } from "./reducer";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
const ASSIGNTENTS_API = `${API_BASE}/api/assignments`;

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

export const findAssignmentsForCourse = async (courseId:string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const findAssignmentById = async (assignmentId: string) => {
  const response = await axios.get(
    `${ASSIGNTENTS_API}/${assignmentId}`
  );
  return response.data;
};

export const createAssignment = async (courseId: string, assignment: Assignment) => {
  const response =  await axios.post(`${COURSES_API}/${courseId}/assignments`,
  assignment);
  return response.data;
}

export const deleteAssignment = async (assignmentId: string) => {
  const response =  await axios.delete(`${ASSIGNTENTS_API}/${assignmentId}`);
  return response.data;
};

export const updateAssignment = async (assignment: Assignment) => {
  const response = await axios.put(`${ASSIGNTENTS_API}/${assignment._id}`, assignment)
  return response.data;
};