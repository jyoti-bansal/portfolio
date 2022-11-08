import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import "../css/main.css";

const Blog = ({ attributes, id }) => {
  const { slug, desc, date, title, category, image } = attributes;
  //console.log("Image", image.data.attributes.url);

  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
      <article>
        <img
          src={"http://localhost:1337" + image.data.attributes.url}
          className="blog-img"
        />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Blog;
