import React from "react";
import { graphql, Link } from "gatsby";
import { Navbar } from "../components/Navbar";
import Head from "../components/Head";
import blog from "./blog";
import About from "./about";
import Contact from "./contact";
import Projects from "../components/Projects";
import Jobs from "../components/Jobs";
import Blogs from "../components/Blogs";

export default function Home({ data }) {
  //console.log("DATA", data);
  //const data=useStaticQuery(query);
  //const {title, description} =data.site.siteMetadata
  //console.log(data)
  // const{strapi:{projects:{data:projects}}}=data
  const projects = data.strapi.projects.data;
  const blogs = data.strapi.blogs.data;
  console.log(blogs);
  //console.log("PROJECTS", projects);
  return (
    <div>
      <Navbar />
      <Head />
      {/* <blog/> */}
      <About />
      <Jobs />
      <Contact />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="blog" showLink />

      {/* <h1>{title}</h1>
    <p>{description}</p>

    <img alt="Google" src={data.image.publicURL} />

    <Link to="/blog"> Read my Blog </Link> */}
    </div>
  );
}

export const query = graphql`
  {
    strapi {
      projects(filters: { featured: { eq: true } }) {
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

    strapi {
      blogs {
        data {
          attributes {
            slug
            content
            desc
            date
            title
            category
            image {
              data {
                attributes {
                  formats
                }
              }
            }
          }
          id
        }
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query MetadataQuery{
//     site{
//       siteMetadata{
//         title
//         description
//     }
//   }

//   image:file(base:{eq: "google.jpeg"}){
//     publicURL
//   }
// }
// `
