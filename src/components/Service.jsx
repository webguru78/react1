import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import Navbar from './Navbar'
import Footer from './Footer'
const Service = () => {
  return (
   <div>
  {/* Home Section Start */}
  <section id="homes">
    <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bg-service">
            <h1>Digital Marketing</h1>
            <p>From driving sales for your business with Facebook and Instagram Ads to ranking high on <br /> search results with Search Engine Optimization, we’ve got you covered. My E-commerce <br />  development brings your online store ideas to practical implementation, while graphics and <br /> UI/UX designs create use-friendly experiences. And if you’re looking for fast, targeted traffic, our <br /> PPC marketing hits the mark every time. Take a look at our results through case studies and <br /> see how we make it happen for you as well.</p>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Home Section End */}
  {/* 2nd Section Start */}
  <section id="seo">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="seo-bg">
            <img src="asset/fb1.jpg" alt className="img-fluid" style={{borderRadius: 15}} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="seo-text">
            <h2>Facebook and Instagram Ads</h2>
            <p>Meta ads are more than just boosting posts—My Facebook and Instagram Ads are designed to  connect with the targeted audience, at the right time and collect quality leads for your business.  Whether it’s about building brand awareness, or driving sales, my <span style={{fontWeight: 'bolder'}}>social media services</span> prove  valuable in delivering real results. With personalized campaigns and targeting, I will target to  bring an audience which converts to sales. Take a look at my Facebook and Instagram ad case  studies to see how I can help you generate more sales for you.
              .</p>
            <a href="facebook.html"> <button className="btn btn-primary" data-aos="flip-left">Learn More</button></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 2nd Section End */}
  {/* 3nd Section Start */}
  <section id="seo" style={{backgroundColor: '#FFFFFF', color: 'black'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="seo-texts">
            <h2>Search Engine Optimization (SEO)
            </h2>
            <p>Search Engine Optimization is all about making sure your website gets found by the quality traffic that converts to sales. My SEO services cover everything from technical optimization to targeted keyword content, ensuring your site ranks high and attracts the audience you need. With a sharp focus on both on-page and off-page optimization, your business will achieve higher conversions through competitive keywords to powerful backlinks. Take a look at my SEO case studies to see how I can help improve your search rankings and increase ROI.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="seo-bg">
            <img src="asset/seoo.jpg" style={{margin: '2.6rem 0'}} alt className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 3nd Section End */}
  {/* 4nd Section Start */}
  <section id="seo">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="seo-bg">
            <img src="asset/ecomm.jpg" alt className="img-fluid" style={{margin: '2.6rem 0'}} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="seo-text3">
            <h2>E-commerce Development
            </h2>
            <p>Your online store has the potential to be more than just another website —it can be a dynamic sales engine that attracts customers, drives sales, and sustains your business growth. My Ecommerce services for platforms like Shopify and Amazon provide a smooth pathway from product listings to optimized checkout processes, ensuring your store stands out and drives sales. I create Ecommerce stores that are not only easy to navigate but also designed to ensure your customers keep coming back to place more orders. Take a look at my Ecommerce case studies to see how I can help you generate more sales.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 4nd Section End */}
  {/* 3nd Section Start */}
  <section id="seo" style={{backgroundColor: '#FFFFFF', color: 'black'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="seo-text1">
            <h2>Graphics and UI/UX Designing
            </h2>
            <p>Graphic designing is more than just visuals—it’s about designing a powerful brand identity for your business that resonates with your audience. My graphic design services with a major focus on UI UX helps in creating interfaces and user experiences that engage the audience to drive action. From branding to logo design, every project is customized as per the requirements of clients. A well designed landing page can increase your sales by 30X. Check out my case studies to see the results.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="seo-bg">
            <img src="asset/grapic.jpg" alt className="img-fluid" style={{height: '60vh', objectFit: 'cover', marginTop: '3rem'}} />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 3nd Section End */}
  {/* 4nd Section Start */}
  <section id="seo">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="seo-bg">
            <img src="asset/ppc.jpg" alt className="img-fluid" style={{margin: '2.6rem 0'}} data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="seo-text">
            <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>PPC Marketing
            </h2>
            <p data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
              PPC marketing is all about maximizing your ROI with every click. My PPC services are designed to generate sales by targeting high-intent customers actively searching for your products or services. The targeted approach ensures that your business reaches the right audience at the engagement threshold to drive conversions and increase revenue significantly. With compelling ad copy, and continuous optimization, I can generate quality leads, increase sales, or build brand awareness.  Check out my PPC case studies to see how I can help you achieve exceptional growth through paid advertising!</p>
            <button className="btn btn-primary" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 4nd Section End */}

 {/* Testimonial Section Start */}
<section id="team" style={{ backgroundColor: '#D9D9D9' }}>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h5 style={{ color: 'black', fontFamily: 'DM Sans', fontSize: 40, fontWeight: 400, lineHeight: '52px', textAlign: 'left' }}>Review</h5>
        <img src="asset/Line.png" alt="Line" className="img-fluid" style={{ margin: '1rem 0' }} />
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      {[
        {
          name: "Saman Ishtiaq",
          image: "asset/saman.jpg",
          review: "It has been an exciting journey working with Daniyal. He took the time to listen to our challenges and offered customized solutions that were spot-on. We’re thrilled with the results and the ongoing support they provide."
        },
        {
          name: "Muhammad Shazam",
          image: "asset/shazam.jpg",
          review: "Working with Daniyal has been a game-changer for our business. His personalized approach made us feel like a priority. His support didn’t end after the project; he continued to be a valuable partner in our growth journey."
        },
        {
          name: "Muhammad Shakeel",
          image: "asset/shakeel.jpg",
          review: "We’ve had a fantastic experience with Daniyal and his team. Their approach is refreshingly straightforward, and their team is always ready to go the extra mile. They made sure our project was not just another job for them but a genuine opportunity to help us achieve our goals."
        }
      ].map((testimonial, index) => (
        <div className="col-md-4 d-flex" key={index}>
          <div className="testimonial-card p-4 rounded">
            <div className="d-flex align-items-center mb-3">
              <img src={testimonial.image} className="me-3" alt="Profile" />
              <div>
                <h5 className="mb-0">{testimonial.name}</h5>
                <div className="star-rating text-warning">
                  {[...Array(5)].map((_, starIndex) => (
                    <i className="fa-duotone fa-solid fa-star" key={starIndex} />
                  ))}
                </div>
              </div>
            </div>
            <p>{testimonial.review}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Testimonial Section End */}

      <Footer/>
</div>

  )
}

export default Service
