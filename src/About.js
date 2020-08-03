import React from 'react'

export default function About() {
  return (
      <div className="col-11 p-4 main-block d-flex flex-column flex-lg-row-reverse align-items-center">
        <div className="field align-self-stretch">
          <img className="img-fluid picture" width="300px" src='/portfolio/IMG_6606.JPG' alt="Gavin Sharkey" />
        </div>
        <div className="field mt-2 mt-lg-0 col-lg-8">
          <div className="border-bottom">
            <h2>About</h2>
          </div>
          <p>I am a full stack web developer with proficiency in React, Rails, Javascript, and Ruby. As a homeschooled student, a passion for learning was instilled in me at a very young age. Since my early teens, I sought out learning such skills as Algebra, through which I developed a love for problem-solving, and Photoshop, which channeled my desire for creative expression. My appreciation for the logic of Algebra, mixed with my desire to create, has led me to pursue a career in software development, to which I bring my capacity and passion to learn. </p>        
        </div>
      </div>
  )
}
