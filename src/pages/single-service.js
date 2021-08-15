import BannerImage from "../images/banner.jpg";

import SideImage from "../images/sideimg4.jpg";
function ServiceDetailPage() {
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
                <h2>eCommerce & Retail</h2>
                <h4>An accountant who gets your business</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="talk-shop section-space-60">
          <div className="container">
            <div className="heading-title">
              <h2>Let's talk shop</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="heading-title text-left">
                    <p>
                      The world of eCommerce is a rapidly changing landscape,
                      with new technologies and payment gateways emerging all
                      the time - and a basketful of ever-changing legislation
                      governing everything from VAT to distance selling
                    </p>
                    <p className="mt-3">
                      It’s crucial, therefore, to have an accountant that can
                      keep pace. An accountant who can speak the language of
                      eCommerce and retail, and provide a genuinely consultative
                      service rather than just the typical end-of-year totting
                      up
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="heading-title text-left">
                    <p>
                      The world of eCommerce is a rapidly changing landscape,
                      with new technologies and payment gateways emerging all
                      the time - and a basketful of ever-changing legislation
                      governing everything from VAT to distance selling
                    </p>
                    <p className="mt-3">
                      It’s crucial, therefore, to have an accountant that can
                      keep pace. An accountant who can speak the language of
                      eCommerce and retail, and provide a genuinely consultative
                      service rather than just the typical end-of-year totting
                      up
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="we-help">
          <div className="container">
            <div className="heading-title">
              <h2>How we help</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="text-left">
                    <p>
                      By integrating Xero with your eCommerce platform, we not
                      only help automate much of your bookkeeping, we also gain
                      real-time insight into your key figuresg
                    </p>
                    <p className="mt-3">
                      This enables us to provide informed business advice,
                      cashflow projections, tax planning and more, while helping
                      you better understand your sales patterns and inventory
                      need
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-left">
                    <p>
                      With years of experience in the retail, digital and
                      eCommerce worlds, we’ll also be able to provide tailored
                      advice on VAT issues, distance-selling regulations and
                      other tax matters, directly affecting your retail and/or
                      online business.
                    </p>
                    <p className="mt-3">
                      It’s crucial, therefore, to have an accountant that can
                      keep pace. An accountant who can speak the language of
                      eCommerce and retail, and provide a genuinely consultative
                      service rather than just the typical end-of-year totting
                      up
                    </p>
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
                    <h3>INFORMED ACCOUNTING SERVICES A QUICK SUMMARY</h3>
                    <p>
                      Core accounting: Statutory accounts preparation,
                      corporation and self-assessment tax returns, quarterly VAT
                      returns, payroll & auto-enrolment and bookkeeping
                      services.
                    </p>
                    <p className="mt-3">
                      Core accounting: Statutory accounts preparation,
                      corporation and self-assessment tax returns, quarterly VAT
                      returns, payroll & auto-enrolment and bookkeeping
                      services.
                    </p>
                    <p className="mt-3">
                      Core accounting: Statutory accounts preparation,
                      corporation and self-assessment tax returns, quarterly VAT
                      returns, payroll & auto-enrolment and bookkeeping
                      services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="inner-box">
                  <div className="items-title">
                    <h3>INFORMED ACCOUNTING SERVICES A QUICK SUMMARY</h3>
                    <p>
                      Core accounting: Statutory accounts preparation,
                      corporation and self-assessment tax returns, quarterly VAT
                      returns, payroll & auto-enrolment and bookkeeping
                      services.
                    </p>
                    <p className="mt-3">
                      Core accounting: Statutory accounts preparation,
                      corporation and self-assessment tax returns, quarterly VAT
                      returns, payroll & auto-enrolment and bookkeeping
                      services.
                    </p>
                    <p className="mt-3">
                      Core accounting: Statutory accounts preparation,
                      corporation and self-assessment tax returns, quarterly VAT
                      returns, payroll & auto-enrolment and bookkeeping
                      services.
                    </p>
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
              <a href="#" className="yellow-btn">
                Get in touch
              </a>
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
                    <a href="#" className="yellow-btn">
                      Get in touch
                    </a>
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
