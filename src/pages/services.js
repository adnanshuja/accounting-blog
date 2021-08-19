import SideImage1 from "../images/sideimg1.png";
import BannerImage from "../images/banner.jpg";

function ServicesPage() {
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
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="our-work section-space-70">
          <div className="container">
            <div className="heading-title">
              <h2>
                We set up Indigo in response to <br />
                listening carefully to the needs of individuals and businesses <br /> 
                <span>who wanted more than just a jobbing accountant.</span>
              </h2>
              <p>
                Our qualified team have excellent experience across a wide range
                of business sizes and sectors. <br /> We understand the dynamics
                and pressures of running a business and tailor our services to
                your <br /> specific needs so you have total clarity on
                financial matters.
              </p>
            </div>
          </div>
        </section>
        <section className="our-services section-space-70">
          <div className="container">
            <div className="items-title">
              <h2>WHAT WE DO</h2>

              <div className="row">
                <div className="col-md-4">
                  <div className="service-content">
                    <h3>CLOUD ACCOUNTING</h3>
                    <p>
                      We have a goal, to be at the forefront of the new digital
                      revolution, embracing technology and encouraging all of
                      our clients to use cloud software.
                    </p>
                    <a href="#" class="yellow-btn">Learn More</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-content">
                    <h3>SNAP RECEIPT APP</h3>
                    <p>
                      {" "}
                      With our Snap app, you can take a photo of your receipts
                      on the go and they will be loaded directly into your cloud
                      accounting software. No receipt will ever be lost again!
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-content">
                    <h3>SYSTEMS ADVICE</h3>
                    <p>
                      Our experts can devise a plan to help you move from a
                      traditional accounting package to a cloud based system in
                      a timely efficient manner.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-content">
                    <h3>ACCOUNTING</h3>
                    <p>
                      We can structure our service to meet the needs of your
                      business, be it for a sole trader, partnership or limited
                      company always ensuring compliance.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-content">
                    <h3>TAX</h3>
                    <p>
                      Our experts are here to work with you to ensure
                      obligations are met and review how you are operating to
                      maximise tax efficiency.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-content">
                    <h3>PAYROLL & PENSIONS</h3>
                    <p>
                      Our payroll bureau can run your weekly or monthly payroll
                      to ensure compliance with HMRC & The Pensions Regulator
                      for RTI submissions and Pensions Auto Enrolment.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-content">
                    <h3>STARTUPS</h3>
                    <p>
                      Discover everything you need to know to run a profitable
                      and happy business. We are here to help you on that
                      exciting journey.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-content">
                    <h3>FORECASTING/BUDGETING</h3>
                    <p>
                      Now information is current and up to date with your cloud
                      software, let us help you forecast how to move towards
                      your future goals.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-content">
                    <h3>OUTSOURCING</h3>
                    <p>
                      Our team can develop a package to help you with
                      bookkeeping, VAT, payroll or management accounting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="choose-us">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ">
                <img className="img-fluid" src={SideImage1} alt="" />
              </div>
              <div className="col-md-4">
                <div className="items-title text-left">
                  <h2>Why Choose US</h2>
                  <ul className="">
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

                  <div className="choose-btn">
                    <a href="#" className="yellow-btn">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-2"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

export default ServicesPage;
