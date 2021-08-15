import EnvelopeImage from "../images/Envelope.svg";
import PostImage from "../images/Post.svg";
import TelephoneImage from "../images/telephone.png";
import ContactImage from "../images/contact-text.svg";

function ContactusPage() {
  return (
    <main>
      <article>
        <section className="in-touch section-space-60">
          <div className="container">
            <div className="heading-title">
              <div className="row align-items-center">
                <div className="col-md-8 text-left">
                  <h1>Get in touch</h1>
                  <p>
                    Reach out to us any time and we’ll happily answer your
                    questions.
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="social-links">
                    <ul className="">
                      <li>
                        <a href="">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="our-contacts">
          <div className="container">
            <div className="items-title">
              <div className="row">
                <div className="col-md-3">
                  <div className="inner-contact">
                    <img src={EnvelopeImage} alt="" />
                    <h4>sales@mazumamoney.co.uk</h4>
                    <p>Drop us an email</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="inner-contact">
                    <img src={TelephoneImage} alt="" />
                    <h4>
                      <a href="">0845 310 5654</a>
                    </h4>
                    <p>Give us a ring</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="inner-contact">
                    <img src={PostImage} alt="" />
                    <h4>
                      Dragon House, Princes Way, Bridgend Industrial Estate,
                      CF31 3AQ
                    </h4>
                    <p>
                      If you want to post us <br /> something or visit us
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="inner-contact">
                    <img src={ContactImage} alt="" />
                    <h4>Question regarding our accountancy package?</h4>
                    <a href="" className="yellow-btn">
                      Book a call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form section-space-60">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="green-circle">
                  <div className="heading-title">
                    <h3>Get in Touch</h3>
                    <p>
                      Drop us a message and one of friendly team members will
                      get back to you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="items-title">
                  <form action="">
                    <ul>
                      <li>
                        <input
                          className=""
                          type="text"
                          placeholder="Name *"
                          id=""
                        />
                      </li>
                      <li>
                        <input
                          className=""
                          type="text"
                          placeholder="Email *"
                          id=""
                        />
                      </li>
                      <li>
                        <input
                          className=""
                          type="text"
                          placeholder="Company (optional)"
                          id=""
                        />
                      </li>
                      <li>
                        <textarea
                          name=""
                          id=""
                          className=""
                          placeholder="Enquiry *"
                        ></textarea>
                      </li>
                      <li className="check-box">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customControlAutosizing"
                          />
                          <label
                            className="custom-control-label"
                            for="customControlAutosizing"
                          >
                            Agree to our terms and conditions
                          </label>
                        </div>
                      </li>
                      <li className="form-btn">
                        <a href="" className="yellow-btn">
                          Submit
                        </a>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

export default ContactusPage;
