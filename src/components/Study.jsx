import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import Navbar from './Navbar'
import Footer from './Footer'
const Study = () => {
  return (
   <div>
  {/* Home Section Start */}
  <section id="homes">
    <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="case-text" data-aos="zoom-in-down" data-aos-duration={800}>
            <h1>Case Studies</h1>
            <p>In today’s fast-paced digital landscape, having a strong online presence is <br /> essential for any business to thrive. Our Digital Marketing services cover a <br /> wide spectrum of strategies designed to increase your visibility, engage <br /> your audience, and drive measurable growth. From targeted Meta Ads and <br /> SEO optimization to content .</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Home Section End */}

  {/* Service 9 - Bootstrap Brain Component */}
  <section className="bg-light py-3 py-md-5 py-xl-8">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="mb-4 display-5 text-center">Our Services</h2>
          <p className="text-secondary mb-5 text-center lead fs-4">Our comprehensive range of services caters to cyclists of all levels, whether you're a casual rider, a commuter, or a seasoned enthusiast.</p>
          <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="container-fluid">
            <div className="row gy-3 gy-md-4">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card border-dark">
                  <div className="card-body text-center p-4 p-xxl-5">
                    <i className="fa-brands fa-facebook" style={{fontSize: 30}} />
                    <h4 className="mb-4" style={{margin: '1.4rem 0', fontSize: 20, fontFamily: 'DM Sans'}}>Facebook and Instagram Ads
                    </h4>
                    <p className="text-secondary">Launched Instagram and Facebook ads to increase engagement, attract quality leads, and drive conversions.</p>
                  <Link to="/facebook" className="btn btn-outline-primary bsb-btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card border-dark">
                  <div className="card-body text-center p-4 p-xxl-5">
                    <i className="fa-brands fa-searchengin" style={{fontSize: 30}} />
                    <h4 className="mb-4" style={{margin: '1.4rem 0', fontSize: 20}}>Search Engine Optimization 
                    </h4>
                    <p className="mb-4 text-secondary">Executed targeted keyword research and optimized the Ecommerce store, successfully ranking for competitive.
                    </p>
                    <Link to="/seo" className="btn btn-outline-primary bsb-btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card border-dark">
                  <div className="card-body text-center p-4 p-xxl-5">
                    <i className="fa-solid fa-cart-shopping" style={{fontSize: 30}} />
                    <h4 className="mb-4" style={{margin: '1.4rem 0', fontSize: 20}}>E-commerce Development
                    </h4>
                    <p className="mb-4 text-secondary">Managed comprehensive e-commerce operations for a startup, enhancing store management and customer.
                    </p>
                                <Link to="/ecommerce" className="btn btn-outline-primary bsb-btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card border-dark">
                  <div className="card-body text-center p-4 p-xxl-5">
                    <i className="fa-solid fa-pencil" style={{fontSize: 30}} />
                    <h4 className="mb-4" style={{margin: '1.4rem 0', fontSize: 20}}>Graphics and UI/UX Designing
                    </h4>
                    <p className="mb-4 text-secondary">Developed a comprehensive mobile app design, landing pages and social media posts for a training startup, featuring a user-friendly interface for courses.
                    </p>
                                  <Link to="/graphic" className="btn btn-outline-primary bsb-btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </Link>
                  </div>
                </div>  
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card border-dark">
                  <div className="card-body text-center p-4 p-xxl-5">
                    <i className="fa-solid fa-pencil" style={{fontSize: 30}} />
                    <h4 className="mb-4" style={{margin: '1.4rem 0', fontSize: 20}}>Mobile App Development
                    </h4>
                    <p className="mb-4 text-secondary ">Mobile App development is more than creating a functional app; it’s about delivering a seamless, engaging experience that keeps users coming.
                    </p>
                    <a href="graphic.html" className="btn btn-outline-primary bsb-btn-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card border-dark">
                  <div className="card-body text-center p-4 p-xxl-5">
                    <i className="fa-solid fa-pencil" style={{fontSize: 30}} />
                    <h4 className="mb-4" style={{margin: '1.4rem 0', fontSize: 20}}>Business Development
                    </h4>
                    <p className="mb-4 text-secondary">It’s hard to invest your amount in a business plan where there’s a solid foundation and backup from professionals. From launching startups.
                    </p>
                    <a href="graphic.html" className="btn btn-outline-primary bsb-btn-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testinomail Section Start */}
  <section id="team" style={{backgroundColor: '#131114'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h5 style={{color: 'white', textAlign: 'center', fontFamily: 'DM Sans', fontSize: '43.44px', fontWeight: 400, lineHeight: '56.47px'}}>Review</h5> 
          <img src="asset/Line 14.png" alt className="img-fluid" style={{margin: 'auto', display: 'block'}} data-aos="zoom-in" data-aos-duration={800} />
        </div>
      </div>
    </div>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 d-flex">
          <div className="testimonial-card p-4 rounded" data-aos="zoom-in" data-aos-duration={800} style={{backgroundColor: '#000000'}}>
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
            <h6 style={{fontFamily: 'Inter Tight', fontSize: '17.38px', fontWeight: 400, lineHeight: '27.8px', textAlign: 'left'}}>24-10-2023</h6>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="testimonial-card p-4 rounded" data-aos="zoom-in" data-aos-duration={800} style={{backgroundColor: '#000000'}}>
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
            <h6 style={{fontFamily: 'Inter Tight', fontSize: '17.38px', fontWeight: 400, lineHeight: '27.8px', textAlign: 'left'}}>24-10-2023</h6>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="testimonial-card p-4 rounded" data-aos="zoom-in" data-aos-duration={800} style={{backgroundColor: '#000000'}}>
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
            <h6 style={{fontFamily: 'Inter Tight', fontSize: '17.38px', fontWeight: 400, lineHeight: '27.8px', textAlign: 'left'}}>24-10-2023</h6> 
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testinomail Section End */}
  {/* Find Section Start */}
  <section id="find">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="find-text">
            <small>Free quote</small>
            <h2>Want to Find Out More?</h2>
            <img src="asset/Line 12.png" alt className="img-fluid" />
            <p>Let’s not dance around the subject (although we’ve got some amazing moves): USEO is the best PPC advertising agency <br /> in Dubai, offering an insanely impressive set of services. The ladies and gentlemen manning our PPC desk have gotten PPC <br /> advertising down to a fine art, while our top-level web designers will finesse your landing pages to ensure increased <br /> conversions. It’s a strategy we’ve refined over many years, and to learn more about it, drop us a message <br /> at&nbsp;info@useo.ae&nbsp;or call us on +971 4 442 6518.
              &nbsp;</p>
            <button className="btn btn-primary">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Find Section End */}

  {/* Footer Section Start */}
    <Footer/>
  {/* Footer Section End */}
</div>
  )
}

export default Study
