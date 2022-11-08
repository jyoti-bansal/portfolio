import React from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import "../css/main.css"

const query = graphql`
  {
    strapi {
      jobs(sort: "id") {
        data {
          attributes {
            company
            date
            position
            desc {
              id
              name
            }
          }
          id
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)

  const {
    strapi: {
      jobs: { data: jobs },
    },
  } = data
  //console.log(jobs[0]);

  const [value, setValue] = React.useState(0)
  const { attributes } = jobs[value]
  const { company, date, desc, position } = attributes
  //console.log(company,date,desc,position)

  return (
    <section className="section jobs">
      <h1 className="project">Experience</h1>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            //console.log(item.attributes.company);
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.attributes.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
