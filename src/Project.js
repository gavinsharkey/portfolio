import React from 'react'

export default function Project({ title, subtitle, github, liveDemo, videoDemo }) {
  return (
    <div className="card">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h6 className="card-subtitle text-muted">{subtitle}</h6>
          <div className="my-3 border-bottom">
            <h5 className="m-0">Links:</h5>
          </div>
          <div className="d-flex flex-column">
            {github ? <a href={github}>GitHub</a> : null}
            {liveDemo ? <a href={liveDemo}>Live Demo</a> : null}
            { videoDemo ? <a href={videoDemo}>Video Demo</a> : null}
          </div>
        </div>
      </div>
  )
}
