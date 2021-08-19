import { Link } from "react-router-dom";
import BannerImage from "../images/banner.jpg";

import Service10 from "../images/service10.png";
import Service11 from "../images/service11.png";
import Service12 from "../images/service12.png";
import Service13 from "../images/service13.png";
import Service14 from "../images/service14.png";
import Service15 from "../images/service15.png";
import Service18 from "../images/service18.png";
import Service19 from "../images/service19.png";
import SideImage from "../images/sideimg02.png";

function WhoWeServePage() {
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
                <h2>Who we Serve</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="our-work section-space-70">
          <div className="container">
            <div className="heading-title">
              <h2>Hassle-Free Accounting Services for Small Business</h2>
              <h4 className="mt-4">
                Cake makers to consultants, we’ve got you all covered.
              </h4>
              <p>
                Our monthly accounting services subscription means that any
                small business can use our services from as little as £28 per
                month + VAT. From assisting with self employed NI contributions,
                to providing tax advice, or filing your tax returns with HMRC;
                we’re here to help the self-employed folk who are currently
                managing their own finances. Once you’ve subscribed to our multi
                award-winning service, you’ll never look back.
              </p>
            </div>
          </div>
        </section>

        <section className="our-services section-space-70">
          <div className="container">
            <div className="items-title">
              <h2>
                Types of Small Business We Help With our <br />
                Accountancy Services
              </h2>

              <ul className="businesslist">
                <li className="">
                  <div className="service-content">
                    <img className="img-fluid" src={Service10} alt="" />
                    <h3>Startups</h3>
                    <p>
                      Our small business accountancy services have been designed
                      to help your business build the strong foundations it
                      needs to grow.
                    </p>
                    <Link
                      className="yellow-btn"
                      to="/whoweserve1"
                    >
                      Find Out More
                    </Link>
                    
                  </div>
                </li>
                <li className="">
                  <div className="service-content">
                    <img className="img-fluid" src={Service11} alt="" />
                    <h3>Sole traders</h3>
                    <p>
                      {" "}
                      Being a Sole Trader, running your own business and
                      juggling a number of different balls at once is tough.
                      This can take its toll on the amount of free time you have
                      to spend on the important things in life.
                    </p>
                    <Link
                      className="yellow-btn"
                      to="/whoweserve1"
                    >
                      Find Out More
                    </Link>
                  </div>
                </li>
                <li className="">
                  <div className="service-content">
                    <img className="img-fluid" src={Service12} alt="" />
                    <h3>Small business</h3>
                    <p>
                      Our fully managed Small Business Accounting Service frees
                      up valuable time for small business owners as well as
                      removing the stress associated with doing your own
                      accounts, tax and bookkeeping.
                    </p>
                    <Link
                      className="yellow-btn"
                      to="/whoweserve1"
                    >
                      Find Out More
                    </Link>
                  </div>
                </li>
                <li className="">
                  <div className="service-content">
                    <img className="img-fluid" src={Service13} alt="" />
                    <h3>Ltd companies</h3>
                    <p>
                      If you are finding Limited Company finances time consuming
                      and a real headache, don’t worry, Mazuma’s Limited Company
                      Accounts service can help.
                    </p>
                    <Link
                      className="yellow-btn"
                      to="/whoweserve1"
                    >
                      Find Out More
                    </Link>
                  </div>
                </li>
                <li className="">
                  <div className="service-content">
                    <img className="img-fluid" src={Service14} alt="" />
                    <h3>Freelancers</h3>
                    <p>
                      As a freelancer your time should be spent growing your
                      business not stressing out over your accounting. Our
                      expert team of accountants for freelancers will crunch
                      your numbers so you don’t have to.
                    </p>
                    <Link
                      className="yellow-btn"
                      to="/whoweserve1"
                    >
                      Find Out More
                    </Link>
                  </div>
                </li>
                <li className="">
                  <div className="service-content">
                    <img className="img-fluid" src={Service15} alt="" />
                    <h3>Limited Liability Partnership</h3>
                    <p>
                      If you’re running a business through an LLP then it’s
                      vital that you are able to concentrate on that, and only
                      that. You don’t need to spend your time worry about the
                      various different tax returns, accounts and filing
                      deadlines that running an LLP requires.
                    </p>
                    <Link
                      className="yellow-btn"
                      to="/whoweserve1"
                    >
                      Find Out More
                    </Link>
                  </div>
                </li>
                <li className="">
                  <div className="service-content">
                    <img className="img-fluid" src={Service18} alt="" />
                    <h3>Micro businesses</h3>
                    <p>
                      At Mazuma we designed our service with micro businesses in
                      mind. Our systems are set up specifically to deal with the
                      needs of micro businesses, allowing business owners more
                      time to run their businesses and less time on accounts and
                      tax admin.
                    </p>
                    <Link
                      className="yellow-btn"
                      to="/whoweserve1"
                    >
                      Find Out More
                    </Link>
                  </div>
                </li>
                <li className="">
                  <div className="service-content">
                    <img className="img-fluid" src={Service19} alt="" />
                    <h3>Lifestyle business</h3>
                    <p>
                      Managing your Lifestyle Business accounts can often get
                      pushed to the bottom of the to-do list. Why waste time
                      stressing about your business finances when Mazuma’s team
                      of expert accountants can take care of everything for you.
                    </p>
                    <Link
                      className="yellow-btn"
                      to="/whoweserve1"
                    >
                      Find Out More
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="switch-accounts">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="text-title text-left">
                  <h3>Looking to Switch Accountants?</h3>
                  <p>
                    As a small business owner, freelancer or contractor, spare
                    time is precious. Switching your accountant may not be a
                    priority and often get pushed to the bottom of the “to-do”
                    list.
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>

              <div className="col-md-3 text-center items-btn">
                <a href="#" className="yellow-btn">
                  {" "}
                  Switch Now
                </a>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </section>

        <section className="subscribe-us section-space-30">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img className="img-fluid" src={SideImage} alt="" />
              </div>
              <div className="col-md-8">
                <div className="heading-title text-left">
                  <h2>Subscribe to Our Newsletter</h2>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email..."
                    />
                    <a href="#" className="yellow-btn">
                      {" "}
                      Switch Now
                    </a>
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

export default WhoWeServePage;
