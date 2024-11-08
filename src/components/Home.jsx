import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Style.css'
import Navbar from './Navbar'
import Footer from './Footer'
const Home = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.count');

    function formatNumber(num) {
        return (num / 1000).toFixed(0) + 'K';
    }

    function animateCounter(counter) {
        let count = 0;
        const target = +counter.getAttribute('data-count');
        const speed = 1200;
        const increment = target / (speed / 100);
        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            counter.textContent = formatNumber(Math.floor(count));
        }, 100);
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });


    return () => {
        // Clean up observers or event listeners if needed
    };
}, []);
  return (

    <div >
  {/* Home Section Start */}
  <section id="home">
    <Navbar/>
    <div className="container">
  <div className="row">
    {/* Left Section with Text */}
    <div className="col-md-6">
      <div className="bg-text">
        <small>Hi, I’m Daniyal</small>
        <h1>Digital Marketer With 7+ Years Experience</h1>
        <p>
          Driving targeted traffic and conversions with high-impact Instagram
          and Facebook ads, Search Engine Optimized Strategies, creative brand
          designing and Ecommerce services.
        </p>
        <button className="btn btn-primary">Free Consultation</button>
        <p style={{ margin: "20px 10px", fontWeight: "bold" }}>
          Trusted by Several Unicorn Companies
        </p>
        <div className="bg-1 d-flex flex-wrap justify-content-start">
          <img src="asset/1.png" alt="" className="img-fluid" />
          <img src="asset/2.png" alt="" className="img-fluid" />
          <img src="asset/3.png" alt="" className="img-fluid" />
          <img
            src="asset/4.png"
            alt=""
            className="img-fluid"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>

    {/* Right Section with Image */}
    <div className="col-md-6">
      <div className="bg">
        <img
          src="asset/bg.png"
          alt=""
          className="img-fluid"
          style={{ marginTop: "2rem" }}
        />
      </div>
    </div>
  </div>
</div>

  </section>
  {/* Home Section End */}


  {/* Counter Section Start */}
  <section id="counter">
    <div className="container">
      <div className="row text-white">
        <div className="col-md-3 d-flex justify-content-center position-relative">
          <div className="counter-app">
            <h2 className="count" data-count={34000}>34K +</h2>
            <small>Ads Launched</small>
          </div>
          <div className="border-divider" />
        </div>
        <div className="col-md-3 d-flex justify-content-center position-relative">
          <div className="counter-app">
            <h2 className="count" data-count={210000}>210 +</h2>
            <small>Clients Supported</small>
          </div>
          <div className="border-divider" />
        </div>
        <div className="col-md-3 d-flex justify-content-center position-relative">
          <div className="counter-app">
            <h2 className="count" data-count={54000}>54K +</h2>
            <small>Leads Generated</small>
          </div>
          <div className="border-divider" />
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <div className="counter-app">
            <h2 className="count" data-count={500000}>500K +</h2>
            <small>Conversions Delivered</small>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Counter Section End */}


{/* Service Section Start */}
<section id="service">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="service-text">
          <h1>Strategic Digital Campaigns that Drive Results</h1>
          <p>
            My result-oriented Digital Marketing Services are targeted to drive meaningful engagement and
            convert it to sales. From strategy to execution, each campaign is designed to meet your unique
            business goals and deliver measurable growth.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="fb">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="fb-text">
          <h2>Facebook and Instagram Ads</h2>
          <p>
            Turn clicks into customers with targeted Facebook and Instagram ads! Grow your brand to the next
            level with personalized Digital Marketing Services.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="fb-text">
          <button className="btn btn-dark" style={{ display: "block", marginLeft: "auto" }}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="fb-bg">
          <img src="asset/dash.jpg" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</section>
{/* Service Section End */}


     {/* Brand Section Start */}
<section id="brand">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="p2 m-2">
          <h2>Graphic Designing and UI UX</h2>
          <p>
            From engaging social media posts to full-scale branding, I create user-friendly landing pages that
            keep your clients engaged, encouraging them to spend more time on your website and take meaningful
            actions for high-quality leads.
          </p>
        </div>
        <div className="brand m-2">
          <img src="asset/brand.png" alt="" className="img-fluid" style={{ marginTop: 20 }} />
        </div>
      </div>
      <div className="col-md-6">
        <div className="p3 m-2">
          <h2>SEO Campaign Strategy</h2>
          <img src="asset/arrow.png" alt="" className="img-fluid" />
        </div>
        <div className="brand1">
          <p>
            All services - All-in-one creative services, from dynamic Facebook and Instagram ads to standout
            company branding, SEO, and web development—designed to drive results and make your brand
            unforgettable!
          </p>
          <button className="btn btn-primary">All Services</button>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Brand Section End */}

 {/* Key Section Start */}
<section id="key">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="key-text">
          <h1>Analytics and Insights</h1>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="key-list">
          <h2>Overview of Paid Reach</h2>
          <li>Total Paid Reach: 8.4 Million</li>
          <li>Total Paid Impressions: 92 Million</li>
          <li>Total Amount Spent: Rs 14,144,380.41</li>
        </div>
        <div className="key-list" style={{ margin: "1.7rem 0" }}>
          <h2>Key Takeaways</h2>
          <li>Exceptional Reach significantly expanding brand visibility.</li>
          <li>High Engagement indicating strong audience interest</li>
          <li>Enhanced Brand Awareness contributing to long-term growth</li>
          <li>Actionable Insights through Data-driven strategies</li>
        </div>
      </div>
      <div className="col-md-8">
        <div className="key-bg">
          <img src="asset/key.jpg" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</section>
{/* Key Section End */}




      {/* Choose Section Start */}
<section id="choose">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="choose-text">
          <h5>Why Choose Me</h5>
          <h1>
            Result Oriented <br /> Digital Marketing <br /> Partner&nbsp;
          </h1>
          <p>
            With over 1 million monthly impressions and{" "}
            <span style={{ fontWeight: "bolder", color: "white" }}>92 million</span> total impressions, my
            targeted campaigns have generated an impressive 5,000 to 6,000 conversations per ad. We have
            achieved remarkable engagement, with over 250,000 interactions on a single ad and 25,000 link
            clicks, all at a cost of just 1.5 AED per click. Hire me to handle all of your Digital Marketing
            needs for sustainable growth!
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="choose-text">
          <img src="asset/bs.png" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <h4 className="text-white">My Expertise:</h4>
    <div className="row">
      {[
        { className: "digital-marketing", icon: "fas fa-bullhorn", text: "Facebook and Instagram Ads" },
        { className: "seo-campaigns", icon: "fas fa-chart-line", text: "Search Engine Optimization" },
        { className: "analytics-reporting", icon: "fas fa-chart-pie", text: "E-commerce Development" },
        { className: "content-marketing", icon: "fas fa-edit", text: "Graphics and UI UX Designing" },
        { className: "company-branding", icon: "fas fa-building", text: "PPC Marketing" },
        { className: "leads-generation", icon: "fas fa-users", text: "Leads Generation", style: { color: "black" } },
      ].map((item, index) => (
        <div className="col-md-4" key={index}>
          <div className={`expertise-box ${item.className}`} style={item.style || {}}>
            <i className={`${item.icon} expertise-icon`} />
            {item.text}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Choose Section End */}


  {/* Work Section Start */}
  <section id="work">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="work-text" data-aos="zoom-out" data-aos-duration={1800}>
            <h5>Recent Works</h5>
            <h2>Highlighted Projects and <br /> Case Studies</h2>
            <p>Explore our highlighted projects and case studies that showcase impactful strategies and <br /> successful outcomes across various industries and clients</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="works" data-aos="zoom-out" data-aos-duration={1800}>
            <h5>(01)</h5>
            <h4>LeftoversDen </h4>
          </div>
        </div>
        <div className="col-md-6">
          <div className="works" data-aos="zoom-out" data-aos-duration={1800}>
            <h5>2024</h5>
            <p>Launched an integrated marketing campaign for an e-commerce startup, increasing traffic by 60%.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="works" data-aos="zoom-out" data-aos-duration={1800}>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="work-bg">
            <img src="asset/home leftoversden.png" alt className="img-fluid" data-aos="zoom-out" data-aos-duration={1800} />
          </div>
        </div>
      </div>
    </div>
    <section id="work-2" style={{margin: '5rem 0'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="works" data-aos="zoom-out" data-aos-duration={1800}>
              <h5>(02)</h5>
              <h4>NS Training</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="works" data-aos="zoom-out" data-aos-duration={1800}>
              <h5>2023</h5>
              <p>Developed a comprehensive mobile app design for a training startup, featuring a user-friendly interface for courses.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="works" data-aos="zoom-out" data-aos-duration={1800}>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="work-bg">
              <img src="asset/ns.png" alt className="img-fluid" style={{borderRadius: 15, height: '100vh'}} data-aos="zoom-out" data-aos-duration={1800} />
              <p data-aos="zoom-out" data-aos-duration={1800}>Discover how our innovative strategies have driven success for clients across diverse <br /> industries. Explore more of our impactful projects and see the full scope of what we <br /> can do for you.</p>
              <button className="btn btn-primary" data-aos="zoom-out" data-aos-duration={1800}>See All Projects</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  {/* Work Section End */}
  
  {/* Testinomail Section Start */}
  <section id="team">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="team" data-aos="zoom-in" data-aos-duration={800}>
            <h4>Testimonials</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="team-bg" data-aos="zoom-in" data-aos-duration={800}>
            <img src="asset/bg3.png" alt className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="team-text" data-aos="zoom-in" data-aos-duration={800}>
            <h3>Messam Raza</h3>
            <img src="asset/Star.png" alt className="img-fluid" />
            <p>Daniyal turned out to be a fantastic partner in our quality leads and business growth. What really impressed us was his ability to explain technical jargon in a way that was easy to understand. Our sales increased exceptionally with his lead generation and marketing strategies. 
              &nbsp;</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <img src="asset/Line.png" alt className="img-fluid" style={{margin: '2rem 0'}} data-aos="zoom-in" data-aos-duration={800} />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex">
          <div className="testimonial-card p-4 rounded" data-aos="zoom-in" data-aos-duration={800}>
            <div className="d-flex align-items-center mb-3" data-aos="zoom-in" data-aos-duration={800}>
              <img src="asset/saman.jpg" className="me-3" alt="Profile Image" />
              <div>
                <h5 className="mb-0" data-aos="zoom-in" data-aos-duration={800}>Saman Ishtiaq</h5>
                <div className="star-rating text-warning">
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                </div>
              </div>
            </div>
            <p>It has been an exciting journey working with Daniyal. He took the time to listen to our challenges and offered customized solutions that were spot-on. We’re thrilled with the results and the ongoing support they provide.
            </p>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="testimonial-card p-4 rounded" data-aos="zoom-in" data-aos-duration={800}>
            <div className="d-flex align-items-center mb-3" data-aos="zoom-in" data-aos-duration={800}>
              <img src="asset/shazam.jpg" className="me-3" alt="Profile Image" data-aos="zoom-in" data-aos-duration={800} />
              <div>
                <h5 className="mb-0">Muhammad Shazam</h5>
                <div className="star-rating text-warning">
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                </div>
              </div>
            </div>
            <p>Working with Daniyal has been a game-changer for our business. His personalized approach made us feel like a priority. His support didn’t end after the project; he continued to be a valuable partner in our growth journey.
            </p>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="testimonial-card p-4 rounded" data-aos="zoom-in" data-aos-duration={800}>
            <div className="d-flex align-items-center mb-3" data-aos="zoom-in" data-aos-duration={800}>
              <img src="asset/shakeel.jpg" className="me-3" alt="Profile Image" data-aos="zoom-in" data-aos-duration={800} />
              <div>
                <h5 className="mb-0">Muhammad Shakeel</h5>
                <div className="star-rating text-warning" data-aos="zoom-in" data-aos-duration={800}>
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                  <i className="fa-duotone fa-solid fa-star" data-aos="zoom-in" data-aos-duration={800} />
                </div>
              </div>
            </div>
            <p>We’ve had a fantastic experience with Daniyal and his team. Their approach is refreshingly straightforward, and their team is always ready to go the extra mile. They made sure our project was not just another job for them but a genuine opportunity to help us achieve our goals.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testinomail Section End */}

  {/* Partner Section Start */}
  <section id="partner">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="partner" data-aos="fade-up" data-aos-duration={2000}>
            <h4>Client &amp; Partners</h4>
            <h2>Building Success with Our Clients and Partners</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="logo" data-aos="fade-up" data-aos-duration={2000}>
            <img src="asset/Logo Client.png" alt className="img-fluid" data-aos="fade-up" data-aos-duration={2000} />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Partner Section End */}

  <Footer/>
    </div>
  )
}

export default Home
