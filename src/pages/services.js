import React, { useEffect, useState } from "react";
import SideImage1 from "../images/sideimg1.png";
import BannerImage from "../images/banner.jpg";
import axios from "axios";

function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    if (isLoading) {
      const fetchBlogs = async () => {
        try {
          const response = await axios.get(
            "http://18.219.85.59:3001/api/service/get-all"
          );

          setServicesList(response.data.data);
          setIsLoading(false);
        } catch (e) {
          console.log(e);
        }
      };
      fetchBlogs();
    }
  }, [servicesList]);
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
                listening carefully to the needs of individuals and businesses{" "}
                <br />
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
                {isLoading && <p>Wait while we are loading the Services</p>}
                {servicesList.map((service, index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <div className="service-content">
                        <h3>{service.title}</h3>
                        <p>{service.shortDescription}</p>
                        <a href="#" className="yellow-btn">
                          Learn More
                        </a>
                      </div>
                    </div>
                  );
                })}
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
