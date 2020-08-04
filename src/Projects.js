import React from 'react'
import Project from './Project'

export default function Projects() {
  return (
    <div className='p-4 main-block d-flex flex-column'>
      <div className="border-bottom mb-3">
        <h2>Projects</h2>
      </div>
      <Project
        title='Disney Trip Planner'
        subtitle="A JavaScript/HTML app for planning a trip to Walt Disney World"
        github="https://github.com/gavinsharkey/disney-trip-js-project"
        liveDemo="https://gavinsharkey.github.io/disney-trip-planner-client/"
        videoDemo="https://youtu.be/HgX-bZ6ZuRM"
      />
    </div>
  )
}
