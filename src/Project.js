import React from 'react'

export default function Project({ title, subtitle, description, github, liveDemo, videoDemo }) {
  return (
    <div style={{borderRadius: '0.5em'}} className="card mt-3">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h6 className={`${description ? 'border-bottom' : null} card-subtitle text-muted`}>{subtitle}</h6>
          <div className="mt-1">
            <p className="card-text">{description}</p>
          </div>
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
