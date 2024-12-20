import React from 'react'
import EncodingParametersInURLs from './EncodingParametersInURLs'
import WorkingWithObjects from './WorkingWithObjects'
import WorkingWithArrays from './WorkingWithArrays'

const API_BASE = process.env.REACT_APP_API_BASE;

const Assignment5 = () => {
  return (
    <div>
        <h1>Assignment5</h1>
        <a href={`${API_BASE}`}>
            Welcome
        </a>

        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
    </div>
  )
}

export default Assignment5