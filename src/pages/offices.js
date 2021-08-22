import { Link } from "react-router-dom";
import BannerImage from "../images/banner.jpg";
import SideImage3 from "../images/sideimg3.png";
import service01 from "../images/service10.png";
import service02 from "../images/service11.png";
import service03 from "../images/service12.png";

function OfficesPage() {
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
                <h2>Our Offices</h2>
              </div>
            </div>
          </div>
        </section>
        <section class="our-office section-space-70">
            <div class="container">
            <div class="row">
            <div class="col-md-6">
              <div class="heading-title text-left">  
              <Link className="nav-link" to="/office1">
                  <div class="blog-text box-space-30">
                    <div class="position-relative content-wrapper-withimage">
                        <img  src={SideImage3} class="img-fluid" alt="" />
                        <div class="overlay"></div>
                        <h3 class="blog-img">Location 01
                        </h3>
                    </div>
                  </div>
                  </Link>   
                  </div>
              </div>
              <div class="col-md-6">
              <div class="heading-title text-left">  
              <Link className="nav-link" to="/office1">
                  <div class="blog-text box-space-30">
                    <div class="position-relative content-wrapper-withimage">
                        <img  src={SideImage3} class="img-fluid" alt="" />
                        <div class="overlay"></div>
                        <h3 class="blog-img">Location 01
                        </h3>
                    </div>
                  </div>
                  </Link>   
                  </div>
              </div>
              <div class="col-md-6">
              <div class="heading-title text-left">  
              <Link className="nav-link" to="/office1">
                  <div class="blog-text box-space-30">
                    <div class="position-relative content-wrapper-withimage">
                        <img  src={SideImage3} class="img-fluid" alt="" />
                        <div class="overlay"></div>
                        <h3 class="blog-img">Location 01
                        </h3>
                    </div>
                  </div>
                  </Link>   
                  </div>
              </div>
              <div class="col-md-6">
              <div class="heading-title text-left">  
              <Link className="nav-link" to="/office1">
                  <div class="blog-text box-space-30">
                    <div class="position-relative content-wrapper-withimage">
                        <img  src={SideImage3} class="img-fluid" alt="" />
                        <div class="overlay"></div>
                        <h3 class="blog-img">Location 01
                        </h3>
                    </div>
                  </div>
                  </Link>   
                  </div>
              </div>
              <div class="col-md-6">
              <div class="heading-title text-left">  
              <Link className="nav-link" to="/office1">
                  <div class="blog-text box-space-30">
                    <div class="position-relative content-wrapper-withimage">
                        <img  src={SideImage3} class="img-fluid" alt="" />
                        <div class="overlay"></div>
                        <h3 class="blog-img">Location 01
                        </h3>
                    </div>
                  </div>
                  </Link>   
                  </div>
              </div>
              <div class="col-md-6">
              <div class="heading-title text-left">  
              <Link className="nav-link" to="/office1">
                  <div class="blog-text box-space-30">
                    <div class="position-relative content-wrapper-withimage">
                        <img  src={SideImage3} class="img-fluid" alt="" />
                        <div class="overlay"></div>
                        <h3 class="blog-img">Location 01
                        </h3>
                    </div>
                  </div>
                  </Link>   
                  </div>
              </div>
              
              
                    
                        </div>
                                
                  </div>
                  
        </section>

        <section class="our-services section-space-70">
               <div class="container">
                   <div class="items-title">
                       <h2>When you need more from your Accountant…
                       </h2>
                       <p class="mh-auto">Lorem Ipsum is simply dummy text of the</p>

                       <ul class="businesslist">
                           <li class="">
                               <div class="service-content">
                                   <img class="img-fluid" src={service01} alt="" />
                                   <h3>Drive profit and growth</h3>
                                   <p>We’ll help you avoid the many pitfalls involved With growing a business and ensure you Increase your profit as you scale.</p>
                                   
                               </div>

                           </li>
                           <li class="">
                               <div class="service-content">
                                   <img class="img-fluid" src={service02} alt="" />
                                   <h3>Get your time back</h3>
                                   <p> We will automate many of your finance processes So you can get precious time back to focus on What really matters in your business.</p>
                                   

                               </div>
                           </li>
                           <li class="">
                               <div class="service-content">
                                   <img class="img-fluid" src={service03} alt="" />
                                   <h3>Control your cash flow</h3>
                                   <p>Cash is the lifeblood of your business. We’ll Show you best practices for managing cash Flow, cash collection and raising finance.</p>
                                   
                               </div>


                           </li>
                       </ul>


                   </div>
               </div>
           </section>



           
      </article>
    </main>
  );
}

export default OfficesPage;
