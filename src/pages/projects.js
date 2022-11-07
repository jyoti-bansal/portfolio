import React from "react"
import { Navbar } from "../components/Navbar"
import { graphql } from "gatsby"
import "../css/main.css"
import Projects from "../components/Projects"

const ProjectsPage = ({
  data: {
    strapi: {
      projects: { data: projects },
    },
  },
}) => {
  return (
    <div>
      <Navbar />
      <section>
        <Projects projects={projects} title="All projects" />
      </section>
    </div>
  )
}

export const query = graphql`
  {
    strapi {
      projects {
        data {
          attributes {
            github
            description
            title
            url
            stack {
              id
              title
            }
          }
          id
        }
      }
    }
  }
`

export default ProjectsPage
