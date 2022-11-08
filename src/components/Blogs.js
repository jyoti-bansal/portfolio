import React from "react";
import Blog from "./Blog";
import { Link } from "gatsby";

const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div>
        {blogs.map((blog) => {
          return <Blog key={blog.id} {...blog} />;
        })}
      </div>
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  );
};

export default Blogs;
