import Image20 from "../images/Image20.png";
import Image23 from "../images/Image23.png";
import Image24 from "../images/image24.png";
import Image26 from "../images/Image26.png";
import Image27 from "../images/Image27.png";
import Image28 from "../images/Image28.png";
import Image29 from "../images/Image29.png";
import Image30 from "../images/Image30.png";
import Image31 from "../images/Image31.png";
import Image40 from "../images/Image40.png";
import BannerImage from "../images/banner.jpg";

import Image001 from "../images/client1.jpg";
import Image002 from "../images/sign-1.png";
import Image003 from "../images/client2.jpg";
import Image004 from "../images/sign-1.png";
import Image005 from "../images/client3.jpg";
import Image006 from "../images/sign-1.png";

function AboutusPage() {
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
                <h2>About US</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="talk-us">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="">
                  <img className="img-fluid" src={Image20} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="items-title text-left flex-center-section">
                  <h3>Talk to real person now</h3>
                  <p>
                    When you ring us you are not going to be placed in a
                    ridiculously long hold queue. Your email will receive a
                    reply and not get lost in the email abyss. We’re here for
                    our clients.
                  </p>
                  <p className="mt-3">
                    <strong>
                      Interested in learning more about our Accounting services?
                    </strong>
                    Book a call with our experts to see what we can do for you.
                  </p>

                  <div className="items-btn mt-3">
                    <button className="yellow-btn btn btn-primary">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </section>

        <section className="talk-us section-space-50">
          <div className="container">
            <div className=" heading-title ">
              <h2>Tracking the ROI of the portfolio</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="items-title text-left flex-center-section">
                  <p>
                    The investors entrust their funds in a portfolio expecting a
                    good return. Naturally, they do a lot of research such as
                    track record of the portfolio, industry analysis and the EPS
                    of the scrip which constitutes a reasonable percentage of
                    the fund.
                  </p>
                  <p className="mt-3">
                    The fund managers at Auditing have extensive experience in
                    handling different portfolios of mutual funds and equity per
                    se. Historically, the performance of their funds has yielded
                    a consistent return of well over 25% every year employing
                    sophisticated techniques of share price movements analysis
                    based on many parameters.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="">
                  <img className="img-fluid" src={Image27} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="clients-reviews">
          <div className="container">
            <div className="heading-title">
              <h2>
                Meet <span>Our Team</span>
              </h2>
            </div>
            <div className="items-title">
              <div className="row">
                <div className="col-md-4">
                  <div className="client-box">
                    <img src={Image001} alt="" />
                    <h3>Jack Cohen</h3>
                    <p>
                      “I used Finacbooks for my tax return and CIS returns. I am
                      very happy with the service I received. As a small
                      business, I wanted a personal service and I will
                      definitely use again.“
                    </p>
                    <img src={Image002} alt="" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="client-box">
                    <img src={Image003} alt="" />
                    <h3>Jack Cohen</h3>
                    <p>
                      “I used Finacbooks for my tax return and CIS returns. I am
                      very happy with the service I received. As a small
                      business, I wanted a personal service and I will
                      definitely use again.“
                    </p>
                    <img src={Image004} alt="" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="client-box">
                    <img src={Image005} alt="" />
                    <h3>Jack Cohen</h3>
                    <p>
                      “I used Finacbooks for my tax return and CIS returns. I am
                      very happy with the service I received. As a small
                      business, I wanted a personal service and I will
                      definitely use again.“
                    </p>
                    <img src={Image006} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space-70 our-process">
          <div className="container">
            <div className="container heading-title">
              <h2>Our Process</h2>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="items-title text-left flex-center-section">
                  <h3> Bookkeeping</h3>
                  <p>
                    {" "}
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Cicero’s
                    De Finibus Bonorum et Malorum for use in a type specimen
                    book.
                  </p>
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5">
                <div className="process-img">
                  <img className="img-fluid" src={Image28} alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="process-img">
                  <img className="img-fluid" src={Image29} alt="" />
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5">
                <div className="items-title text-left flex-center-section">
                  <h3> Statutory end of year accounts</h3>
                  <p>
                    {" "}
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Cicero’s
                    De Finibus Bonorum et Malorum for use in a type specimen
                    book.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="items-title text-left flex-center-section">
                  <h3> Statutory end of year accounts</h3>
                  <p>
                    {" "}
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Cicero’s
                    De Finibus Bonorum et Malorum for use in a type specimen
                    book.
                  </p>
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5">
                <div className="process-img">
                  <img className="img-fluid" src={Image30} alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="process-img">
                  <img className="img-fluid" src={Image31} alt="" />
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5">
                <div className="items-title text-left flex-center-section">
                  <h3> Statutory end of year accounts</h3>
                  <p>
                    {" "}
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Cicero’s
                    De Finibus Bonorum et Malorum for use in a type specimen
                    book.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="col-md-2">
                <div className="center-line">
                  <div className="line">
                    <div className="circle"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                    <div className="circle4"></div>
                  </div>
                </div>
              </div> */}
          </div>
        </section>

        <section className="testimonials section-space-70">
          <div className="container">
            <div className="items-title">
              <h2>Testimonials</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="green-box">
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
                  <div className="person-icon">
                    <ul>
                      <li>
                        <img className="img-fluid" src={Image40} alt="" />
                      </li>
                      <li>
                        <h4>Jane Cooper</h4>
                        <p>CEO, ABC Corporation</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="green-box">
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
                  <div className="person-icon">
                    <ul>
                      <li>
                        <img className="img-fluid" src={Image40} alt="" />
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

        <section className="call-treetops section-space-50">
          <div className="container">
            <div className="items-title text-center">
              <h3>
                An accounting expert from Treetops can call you back at a time
                that suits you.
              </h3>

              <div className="items-btn">
                <button className="yellow-btn btn btn-primary ">
                  Schedule a call
                </button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

export default AboutusPage;
