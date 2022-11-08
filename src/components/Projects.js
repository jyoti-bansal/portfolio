import React from "react"
import { Link } from "gatsby"
import Project from "./Project"

const Projects = ({ projects, title, showLink }) => {
  //console.log("PROJECTS2",projects);
  return (
    <section className="section projects">
      {/* <title>Featured Projects</title> */}
      <div className="section-center">
        {projects.map((project, index) => {
          //console.log(project)
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
