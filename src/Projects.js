import React from 'react'
import Project from './Project'

export default function Projects() {
  return (
    <div className='p-4 main-block d-flex flex-column'>
      <div className="border-bottom">
        <h2>Projects</h2>
      </div>
      <Project
        title="Portfolio Site"
        subtitle="You're looking at it!"
        github="https://github.com/gavinsharkey/portfolio"
      />
      <Project
        title="Nibbl"
        subtitle="A Concise Social Media"
        description="This is Nibbl. Basically, this is a social media with one key quirk: 30-character limit. You have to be very concise. I took a lot of inspiration from Twitter, so in many ways it's a simplifyed version of that. I hope you enjoy!"
        github="https://github.com/gavinsharkey/nibbl_app_react_project"
        liveDemo="https://gavinsharkey.github.io/nibbl"
        videoDemo="https://youtu.be/_9M5TPCa2_s"
      />
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
