import React from 'react'

export default function About() {
  return (
      <div className="p-4 main-block d-flex flex-column flex-lg-row-reverse align-items-center">
        <div className="field">
          <img className="img-fluid picture" width="300px" src='/portfolio/second_image.JPG' alt="Gavin Sharkey" />
        </div>
        <div className="field mt-2 mt-lg-0 col-lg-9">
          <div className="border-bottom">
            <h2>About</h2>
          </div>
          <p>Full stack web developer with proficiency in React, Rails, JavaScript, and Ruby. I've always had a passion for the problem-solving, logical nature of Algebra and Mathematics in general. Now I channel that passion towards solving problems across the stack, making awesome software.
            <br />
            <br />
            My other main priority in life is fitness. Prior to Flatiron, I used to be a running specialist at Fit2Run. My favorite responsibility was getting to pace half-marathons. It filled me with joy knowing that my leadership allowed other to set new PRs, or even just complete their first half-marathon! And now I carry that passion for leadership and supporting my team into everything I do.
            <br />
            <br />
            My main focus now is growing as a developer, and finding a place where I can work with an equally passionate team, to make something great!
          </p>        
        </div>
      </div>
  )
}
