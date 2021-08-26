import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BannerImage from "../images/banner.jpg";
import Blog1 from "../images/blog-1.jpg";

function BlogsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://18.219.85.59:3001/api/blog/get-all"
        );

        setBlogList(response.data.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBlogs();
  }, [blogList]);
  return (
    <main>
      <article>
        <section
          className="inner-banner"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <div className="container">
            <div className="content-wrapper">
              <div className="heading-title">
                <h2>BLOGS</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="blogs-box section-space-60">
          <div className="container">
            <div className="items-title">
              <div className="row">
                {isLoading && <p>Wait while we are loading the blogs</p>}
                {blogList.map((blog, index) => {
                  return (
                    <div className="col-md-4">
                      <div className="blog-item">
                        <div className="blog-top">
                          <a href="">
                            <img
                              src={Blog1}
                              alt="How Long Does Immunity Last After COVID-19? What We Know"
                            />
                          </a>
                        </div>

                        <div className="blog-bottom">
                          <h3>
                            <a href="">{blog.title}</a>
                          </h3>
                          <span className="excerpt">
                            <p>{blog.description}</p>
                          </span>
                          <ul>
                            <li>
                              <Link to="/blog-details">
                                Read More{" "}
                                <i className="icofont-long-arrow-right"></i>
                              </Link>
                            </li>

                            <li>
                              <i className="fa fa-calendar"></i> Mar 24,2021
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

export default BlogsPage;
