import BannerImage from "../images/banner.jpg";
import Service10Img from "../images/service10.png";
import Service11Img from "../images/service11.png";
import Service12Img from "../images/service12.png";
import SideImage1 from "../images/sideimg1.png";
import SideImage2 from "../images/sideimg02.png";
import PersonIcon from "../images/Image40.png";

function IndexPage() {
  return (
    <main>
      <article>
        <section
          className="inner-banner main-banner"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <div className="container">
            <div className="banner-carousel owl-carousel owl-theme">
              <div className="item">
                <div className="">
                  <div className="content-wrapper">
                    <div className="heading-title">
                      <h2>Professional Accounting & Tax Services</h2>
                      <h4>
                        Infinite Accounts is a leading company providing quality
                        accounting & tax
                        <br></br>
                        services to businesses.
                      </h4>
                      <ul className="">
                        <li>
                          <a href="#" className="yellow-btn">
                            Read More
                          </a>
                        </li>
                        <li>
                          <a href="#" className="transparent-btn">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="content-wrapper">
                  <div className="">
                    <div className="content-wrapper">
                      <div className="heading-title">
                        <h2>2Professional Accounting & Tax Services</h2>
                        <h4>
                          Infinite Accounts is a leading company providing
                          quality accounting & tax <br></br>
                          services to businesses.
                        </h4>
                        <ul className="">
                          <li>
                            <a href="#" className="yellow-btn">
                              Read More
                            </a>
                          </li>
                          <li>
                            <a href="#" className="transparent-btn">
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="content-wrapper">
                  <div className="">
                    <div className="content-wrapper">
                      <div className="heading-title">
                        <h2>33Professional Accounting & Tax Services</h2>
                        <h4>
                          Infinite Accounts is a leading company providing
                          quality accounting & tax <br></br>
                          services to businesses.
                        </h4>
                        <ul className="">
                          <li>
                            <a href="#" className="yellow-btn">
                              Read More
                            </a>
                          </li>
                          <li>
                            <a href="#" className="transparent-btn">
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-services section-space-70">
          <div className="container">
            <div className="items-title">
              <h2>When you need more from your Accountant…</h2>
              <p className="mh-auto">Lorem Ipsum is simply dummy text of the</p>

              <ul className="businesslist">
                <li className="">
                  <div className="service-content">
                    <img className="img-fluid" src={Service10Img} alt="" />
                    <h3>Drive profit and growth</h3>
                    <p>
                      We’ll help you avoid the many pitfalls involved With
                      growing a business and ensure you Increase your profit as
                      you scale.
                    </p>
                  </div>
                </li>
                <li className="">
                  <div className="service-content">
                    <img className="img-fluid" src={Service11Img} alt="" />
                    <h3>Get your time back</h3>
                    <p>
                      {" "}
                      We will automate many of your finance processes So you can
                      get precious time back to focus on What really matters in
                      your business.
                    </p>
                  </div>
                </li>
                <li className="">
                  <div className="service-content">
                    <img className="img-fluid" src={Service12Img} alt="" />
                    <h3>Control your cash flow</h3>
                    <p>
                      Cash is the lifeblood of your business. We’ll Show you
                      best practices for managing cash Flow, cash collection and
                      raising finance.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="text-center">
                <a href="#" class="yellow-btn">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="call-treetops section-space-60">
          <div class="container">
            <div class="heading-title text-center">
              <h3 class="mb-4">
                Are you looking for professional advice for your Business or
                your industry?
              </h3>

         


              <div class="items-btn">
                <a href="#" class="yellow-btn">
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="we-serve section-space-60">
          <div class="">
            <div class="heading-title">
              <h2>Who we Serve</h2>
            </div>
          </div>
        </section>

        <section class="choose-us">
          <div class="container">
            <div class="row">
              <div class="col-md-6 ">
                <img className="img-fluid" src={SideImage1} alt="" />
              </div>
              <div class="col-md-6">
                <div class="items-title text-left">
                  <h2>How can we help you</h2>
                  <ul class="">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing Eli
                      Condimentum dia
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing Eli
                      Condimentum dia
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing Eli
                      Condimentum dia
                    </li>
                  </ul>

                  <div class="mt-3">
                    <a href="#" class="yellow-btn">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-md-2"></div>
            </div>
          </div>
        </section>
        <section class="testimonials section-space-70">
          <div class="container">
            <div class="items-title">
              <h2>Testimonials</h2>
              <div class="row">
                <div class="col-md-6">
                  <div class="green-box">
                    <h4>Incredible Experience</h4>
                    <p>
                      We had an incredible experience working with Landify and
                      were impressed They made such a big difference in only
                      three weeks. Our team is so Grateful for the wonderful
                      improvements they made and their ability to get Familiar
                      with the concept so quickly. It acted as a catalyst to
                      take our Design to the next level and get more eyes on our
                      product.
                    </p>
                  </div>
                  <div class="person-icon">
                    <ul>
                      <li>
                        <img className="img-fluid" src={PersonIcon} alt="" />
                      </li>
                      <li>
                        <h4>Jane Cooper</h4>
                        <p>CEO, ABC Corporation</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="green-box">
                    <h4>Dependable, Responsive, Professional Partner</h4>
                    <p>
                      We had an incredible experience working with Landify and
                      were impressed They made such a big difference in only
                      three weeks. Our team is so Grateful for the wonderful
                      improvements they made and their ability to get Familiar
                      with the concept so quickly. It acted as a catalyst to
                      take our Design to the next level and get more eyes on our
                      product.
                    </p>
                  </div>
                  <div class="person-icon">
                    <ul>
                      <li>
                        <img className="img-fluid" src={PersonIcon} alt="" />
                      </li>
                      <li>
                        <h4>Jane Cooper</h4>
                        <p>CEO, ABC Corporation</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="subscribe-us section-space-30 theme-bg">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <img className="img-fluid" src={SideImage2} alt="" />
              </div>
              <div class="col-md-8">
                <div class="heading-title text-left">
                  <h2 class="text-white">Subscribe to Our Newsletter</h2>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email..."
                    />
                    <a href="#" class="yellow-btn">
                      {" "}
                      Switch Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="line">
          <div class="">
            <div class="circle"></div>
          </div>
        </section>
      </article>
    </main>
  );
}

export default IndexPage;
