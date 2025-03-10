import React from "react";
import "./blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

const Blogs = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section_title">Latest Posts</h2>

      <div className="blog_container grid">
        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#">
              <span className="blog_category">Review</span>
              <a href="#">
                <img src={Image1} alt="" className="blog_img" />
              </a>
            </a>
          </div>
          <div className="blog_details">
            <h3 className="blog_title">5 best tools for React developers</h3>
            <div className="blog_meta">
              <span className="">02 May 2022</span>
              <span className="blog_dot">.</span>
              <span>Blogby</span>
            </div>
          </div>
        </div>

        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#">
              <span className="blog_category">Tutorials</span>
              <a href="#">
                <img src={Image2} alt="" className="blog_img" />
              </a>
            </a>
          </div>
          <div className="blog_details">
            <h3 className="blog_title">How to become a frontend developer</h3>
            <div className="blog_meta">
              <span className="">02 May 2022</span>
              <span className="blog_dot">.</span>
              <span>Blogby</span>
            </div>
          </div>
        </div>

        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#">
              <span className="blog_category">Todo List</span>
              <a href="#">
                <img src={Image3} alt="" className="blog_img" />
              </a>
            </a>
          </div>
          <div className="blog_details">
            <h3 className="blog_title">Use full Todo List</h3>
            <div className="blog_meta">
              <span className=""> 02 June 2022</span>
              <span className="blog_dot">.</span>
              <span>Blogby</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
