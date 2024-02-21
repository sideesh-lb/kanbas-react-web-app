import React from 'react'
import CourseHomeContent from './CourseHomeContent'
import CourseStatusSection from './CourseSectionStatus'


const CoursesHome = () => {
  return (
    <div className="flex-grow-1">
        <div className="d-flex">
          <CourseHomeContent />
          <CourseStatusSection />
        </div>
    </div>
  )
}

export default CoursesHome