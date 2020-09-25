import React, {useState, useEffect} from 'react'
import Project from './Project'

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('https://gavin-sharkey-projects-api.herokuapp.com/projects')
    .then(resp => resp.json())
    .then(json => {
      setProjects(json)
      setIsLoading(false)
    })
  }, [])

  const projectsList = () => {
    return projects.map(project => (
      <Project
        title={project.title}
        subtitle={project.subtitle}
        description={project.description}
        github={project.github}
        liveDemo={project.demo}
        videoDemo={project.video}
      />
    ))
  }

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
      { isLoading
      ? <h4 className="text-center mt-3">Loading...</h4>
      : projectsList() }
    </div>
  )
}
