import React from "react";
import Link from "../components/Link";
import blogsList from "../data/blogsIFollowData";
import "../styles/pages/BlogsIFollow.css";
import { Globe } from "react-feather";

const BlogsIFollow = () => {
  return (
    <div className="container" id="blogs-i-follow">
      <h1 className="page-heading" id="projects">
        <span className="hash-symbol">#</span>Blogs I Follow
      </h1>
      <p>
        <strong>Motivation:</strong> I came across{" "}
        <Link to="https://twitter.com/taniarascia">Tania Rascia's</Link> post
        about{" "}
        <Link to="https://www.taniarascia.com/developer-blogs-to-follow-2019/">
          Developer blogs to follow
        </Link>{" "}
        and that inspired me to make my own list of good blog and artices that I
        have come across to share with others! So in this space I'll maintain
        good blogs/articles.
      </p>
      <div className="blog-list">
        {blogsList.map(blog => {
          return (
            <div className="blog">
              <div className="blog__heading">
                <Link className="blog__heading--author" to={blog.twitterLink}>
                  {blog.author}
                </Link>
              </div>
              <hr />
              <div className="blog__content">
                <span className="blog__content--linkContainer">
                  <Globe className="blog__content--linkIcon" size={25} />
                  <Link className="blog__content--link" to={blog.link}>
                    {blog.link}
                  </Link>
                </span>
                <div className="blog__content--desc">{blog.desc}</div>
              </div>
              <span className="dot">.</span>
            </div>
          );
        })}
        <p>
          I also follow{" "}
          <Link to="https://react.statuscode.com/">React Status</Link> for
          weekly React updates, articles, tutorials.
        </p>
      </div>
    </div>
  );
};

export default BlogsIFollow;
