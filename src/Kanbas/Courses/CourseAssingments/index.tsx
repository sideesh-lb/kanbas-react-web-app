import { useParams } from 'react-router';
import '../../../index.css';
import CourseAssignmentContent from './CourseAssingmentContent';

const CoursesAssignments = () => {
  return (
    <div className="flex-grow-1">
        <div className="d-flex">
          <CourseAssignmentContent />
        </div>
    </div>
  );
};

export default CoursesAssignments;