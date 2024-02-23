import React from 'react'
import CourseHomeContent from './CourseHomeContent'
import CourseStatusSection from './CourseSectionStatus'


const CoursesHome = () => {
  return (
    <div className="" style={{
      width: '100%',
      overflowX: 'hidden'
    }
    }>
        <div className="d-flex">
          <CourseHomeContent />
          <CourseStatusSection />
        </div>
    </div>
  )
}

export default CoursesHome