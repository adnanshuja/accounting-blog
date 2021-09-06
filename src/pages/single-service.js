import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import BannerImage from "../images/banner.jpg";
import SideImage from "../images/sideimg4.png";
function ServiceDetailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [serviceDetails, setServiceDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (isLoading) {
      const fetchServiceDetails = async () => {
        try {
          const response = await axios.get(
            `http://18.219.85.59:3001/api/service/get-detail/${id}`
          );

          setServiceDetails(response.data.data);
          setIsLoading(false);
        } catch (e) {
          console.log(e);
        }
      };
      fetchServiceDetails();
    }
  }, [serviceDetails]);
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
                <h2>{serviceDetails.title}</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="talk-shop section-space-60">
          <div className="container">
            <div className="heading-title">
              <h2>{serviceDetails.header1}</h2>
              <div className="row">
                <div className="col-md-12">
                  <div className="heading-title text-left">
                    <p>{serviceDetails.description1}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="we-help">
          <div className="container">
            <div className="heading-title">
              <h2>{serviceDetails.header2}</h2>
              <div className="row">
                <div className="col-md-12">
                  <div className="text-left">
                    <p>{serviceDetails.description2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-box section-space-70">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="inner-box">
                  <div className="items-title">
                    <h3>{serviceDetails.summary1}</h3>
                    <p>{serviceDetails.summary1Details}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="inner-box">
                  <div className="items-title">
                    <h3>{serviceDetails.summary2}</h3>
                    <p>{serviceDetails.summary2Details}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-btn heading-title">
              <h4>
                All done? Great – then give us a call and we’ll go through all
                the services you need in more detail. And of course if you can’t
                decide, or you’re not sure exactly what you need, we’re happy to
                help.
              </h4>
              <Link to="/contact-us" className="yellow-btn">
                Get in touch
              </Link>
            </div>
          </div>
        </section>

        <section className="our-software">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="heading-title text-left">
                  <h2>Find out as soon as it happens</h2>
                  <p>
                    You can't look at your numbers every minute of every day.
                    With our help, you won't need to.
                  </p>
                  <p>
                    We'll inform you of changes that have happened today, such
                    as new orders, but we'll also look at trends that might help
                    you forecast for a brighter future.
                  </p>
                  <div className="software-btn">
                    <Link to="/contact-us" className="yellow-btn">
                      Get in touch
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="">
                  <img className="img-fluid" src={SideImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

export default ServiceDetailPage;
