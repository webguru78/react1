import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style.css'; // Adjust the path as necessary
import Navbar from './Navbar';
import Footer from './Footer';

const Price = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly((prev) => !prev);
  };

  // Pricing data
  const pricing = {
    basic: isYearly ? { price: 1300, duration: 'mo' } : { price: 1500, duration: 'mo' },
    pro: isYearly ? { price: 3000, duration: 'mo' } : { price: 3500, duration: 'mo' },
    business: isYearly ? { price: 4300, duration: 'mo' } : { price: 5000, duration: 'mo' },
  };
  

  return (
    <div>
      {/* Home Section Start */}
      <section id="homes">
      <Navbar/>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bg-service" data-aos="zoom-in-down" data-aos-duration="800">
                <h1>Pricing</h1>
                <p>
                  Affordable, effective, and strategic. Select the plan that aligns with your business <br />
                  goals and the outcomes you’re looking for. My pricing is designed to deliver impactful results and sustainable <br />
                  growth, tailored to every stage of your business journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home Section End */}

      {/* Price Section Start */}
      <section id="price">
        <div className="price_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="btn_wrap">
                  <h3>Monthly</h3>
                  <label className="switch">
                    <input type="checkbox" checked={isYearly} onChange={togglePricing} />
                    <span></span>
                  </label>
                  <h3>Yearly <span>15% OFF</span></h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="price_box">
                  <div className="text-center">
                    <h3 className="price_head">Basic</h3>
                    <h2 className="price_headmain fs-2">AED {pricing.basic.price}<span>/{pricing.basic.duration}</span></h2>
                    <p>For new startups and teams:</p>
                  </div>
                  <ul>
                    <li><i className="fas fa-check"></i>Meta ads</li>
                    <li><i className="fas fa-check"></i>Graphic Designing</li>
                    <li><i className="fas fa-check"></i>Audit Reports</li>
                  </ul>
                  <p>Above services include:</p>
                  <p>Running Facebook and Instagram ads, social media posts, logos along with complete audit reports.</p>
                  <Link to="/payment" className="price_btn">Join for free</Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="price_box">
                  <div className="text-center">
                    <h3 className="price_head">Pro</h3>
                    <h2 className="price_headmain fs-2">AED {pricing.pro.price}<span>/{pricing.pro.duration}</span></h2>
                    <p>For new startups and teams:</p>
                  </div>
                  <ul>
                    <li><i className="fas fa-check"></i>Meta ads</li>
                    <li><i className="fas fa-check"></i>SEO</li>
                    <li><i className="fas fa-check"></i>Graphic Designing</li>
                    <li><i className="fas fa-check"></i>Audit Reports</li>
                  </ul>
                  <p>Above services include:</p>
                  <p>Running Facebook and Instagram ads, social media posts, logos along with complete audit reports.</p>
                  <Link to="/payment" className="price_btn">Join for free</Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="price_box">
                  <div className="text-center">
                    <h3 className="price_head">Business</h3>
                    <h2 className="price_headmain fs-2">AED {pricing.business.price}<span>/{pricing.business.duration}</span></h2>
                    <p>For new startups and teams:</p>
                  </div>
                  <ul>
                    <li><i className="fas fa-check"></i>Meta ads</li>
                    <li><i className="fas fa-check"></i>Graphic Designing</li>
                    <li><i className="fas fa-check"></i>Audit Reports</li>
                    <li><i className="fas fa-check"></i>Website Development</li>
                    <li><i className="fas fa-check"></i>SEO</li>
                  </ul>
                  <p>Above services include:</p>
                  <p>Running Facebook and Instagram ads, social media posts, logos along with complete audit reports.</p>
                  <Link to="/payment" className="price_btn">Join for free</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Price Section End */}

      {/* Footer Section Start */}
     <Footer/>
      {/* Footer Section End */}
    </div>
  );
};

export default Price;
