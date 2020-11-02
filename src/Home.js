import React from 'react'
import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn'

export default function Home() {
  return (
    <div className="p-4 main-block d-flex flex-column flex-lg-row align-items-center">
      <div className="field">
        <img className="img-fluid picture" width="300px" src='/portfolio/IMG_6606.JPG' alt="Gavin Sharkey" />
      </div>
      <div className="field my-2 mt-lg-0">
        <div className="my-2 border-bottom d-flex flex-column flex-lg-row align-items-center">
          <h2>Gavin Sharkey</h2>
          <div className="d-flex flex-row align-items-center justify-content-around">
            <a className='btn mx-2 p-0' style={{fontSize: '1.5em'}} href="https://gavinsharkey.github.io">Blog</a>
            <a className="mx-2" href="https://www.linkedin.com/in/gavinsharkey/">
              <LinkedIn />
            </a>
            <a className="mx-2" href="https://github.com/gavinsharkey">
              <Github />
            </a>
          </div>
        </div>
        <p className="text-center text-lg-left">Software Engineer | Full-Stack Developer | Proficiency in React, Rails, JavaScript, Ruby | Experience Building Web Applications</p>
      </div>
    </div>
  )
}
