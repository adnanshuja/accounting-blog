import { Link } from "react-router-dom";

import BannerImage from "../images/banner.jpg";
import Blog1 from "../images/blog-1.jpg";
import Blog2 from "../images/blog-2.jpg";
import Blog3 from "../images/blog-3.jpg";

function BlogsPage() {
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
                        <a href="">
                          How Long Does Immunity Last After COVID-19? What We
                          Know
                        </a>
                      </h3>
                      <span className="excerpt">
                        <p>
                          For those who recover from COVID-19, immunity to the
                          virus can last at least 8 months and maybe longer,
                          research shows. Immunity can occur naturally after
                          developing COVID-19 or from getting the COVID-19
                          vaccination. Because the length of immunity after
                          developing COVID-19 or getting the vaccine is unknown,
                          practicing physical or social distancing and wearing
                          […]
                        </p>
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
                <div className="col-md-4">
                  <div className="blog-item">
                    <div className="blog-top">
                      <a href="">
                        <img
                          src={Blog2}
                          alt="How Long Does Immunity Last After COVID-19? What We Know"
                        />
                      </a>
                    </div>

                    <div className="blog-bottom">
                      <h3>
                        <a href="">
                          How Long Does Immunity Last After COVID-19? What We
                          Know
                        </a>
                      </h3>
                      <span className="excerpt">
                        <p>
                          For those who recover from COVID-19, immunity to the
                          virus can last at least 8 months and maybe longer,
                          research shows. Immunity can occur naturally after
                          developing COVID-19 or from getting the COVID-19
                          vaccination. Because the length of immunity after
                          developing COVID-19 or getting the vaccine is unknown,
                          practicing physical or social distancing and wearing
                          […]
                        </p>
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
                <div className="col-md-4">
                  <div className="blog-item">
                    <div className="blog-top">
                      <a href="">
                        <img
                          src={Blog3}
                          alt="How Long Does Immunity Last After COVID-19? What We Know"
                        />
                      </a>
                    </div>

                    <div className="blog-bottom">
                      <h3>
                        <a href="">
                          How Long Does Immunity Last After COVID-19? What We
                          Know
                        </a>
                      </h3>
                      <span className="excerpt">
                        <p>
                          For those who recover from COVID-19, immunity to the
                          virus can last at least 8 months and maybe longer,
                          research shows. Immunity can occur naturally after
                          developing COVID-19 or from getting the COVID-19
                          vaccination. Because the length of immunity after
                          developing COVID-19 or getting the vaccine is unknown,
                          practicing physical or social distancing and wearing
                          […]
                        </p>
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
                        <a href="">
                          How Long Does Immunity Last After COVID-19? What We
                          Know
                        </a>
                      </h3>
                      <span className="excerpt">
                        <p>
                          For those who recover from COVID-19, immunity to the
                          virus can last at least 8 months and maybe longer,
                          research shows. Immunity can occur naturally after
                          developing COVID-19 or from getting the COVID-19
                          vaccination. Because the length of immunity after
                          developing COVID-19 or getting the vaccine is unknown,
                          practicing physical or social distancing and wearing
                          […]
                        </p>
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
                <div className="col-md-4">
                  <div className="blog-item">
                    <div className="blog-top">
                      <a href="">
                        <img
                          src={Blog2}
                          alt="How Long Does Immunity Last After COVID-19? What We Know"
                        />
                      </a>
                    </div>

                    <div className="blog-bottom">
                      <h3>
                        <a href="">
                          How Long Does Immunity Last After COVID-19? What We
                          Know
                        </a>
                      </h3>
                      <span className="excerpt">
                        <p>
                          For those who recover from COVID-19, immunity to the
                          virus can last at least 8 months and maybe longer,
                          research shows. Immunity can occur naturally after
                          developing COVID-19 or from getting the COVID-19
                          vaccination. Because the length of immunity after
                          developing COVID-19 or getting the vaccine is unknown,
                          practicing physical or social distancing and wearing
                          […]
                        </p>
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
                <div className="col-md-4">
                  <div className="blog-item">
                    <div className="blog-top">
                      <a href="">
                        <img
                          src={Blog3}
                          alt="How Long Does Immunity Last After COVID-19? What We Know"
                        />
                      </a>
                    </div>

                    <div className="blog-bottom">
                      <h3>
                        <a href="">
                          How Long Does Immunity Last After COVID-19? What We
                          Know
                        </a>
                      </h3>
                      <span className="excerpt">
                        <p>
                          For those who recover from COVID-19, immunity to the
                          virus can last at least 8 months and maybe longer,
                          research shows. Immunity can occur naturally after
                          developing COVID-19 or from getting the COVID-19
                          vaccination. Because the length of immunity after
                          developing COVID-19 or getting the vaccine is unknown,
                          practicing physical or social distancing and wearing
                          […]
                        </p>
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
              </div>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}

export default BlogsPage;
