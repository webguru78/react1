import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import Navbar from './Navbar'
import Footer from './Footer'
const About = () => {
  return (
    <div>
        
      <div>
  {/* Home Section Start */}
  <section id="homes">
    <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bg-service" data-aos="zoom-in-down" data-aos-duration={800}>
            <h1>About Us</h1>
            <p>Meet Daniyal Intisar—a small-town boy with big dreams and even bigger ambitions. Growing up, I <br />always believed that my humble beginnings didn’t define my future; instead, they fueled my desire to <br /> achieve greatness. After earning my bachelor’s degree in engineering, I found myself at a <br />crossroads, where a spark of curiosity led me to the world of marketing. 7 years ago, I dove headfirst <br /> into this dynamic field, embracing every challenge and opportunity that came my way. My journey has  <br />been one of relentless passion and dedication, ultimately leading me to co-found NS Training and  <br />Marketing. Here, I strive to empower others to unlock their potential and transform their dreams into  <br />reality, just as I have done.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Home Section End */}
  {/* Price About Start */}
  <section id="price-about">
    <div className="container section">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 image-section">
          <img src="asset/digital.jpg" alt="Experience Design Image" className="img-fluid" />
        </div>
        {/* Content Section */}
        <div className="col-md-6 content-section">
          <h2>My Digital Marketing Agency
          </h2>
          <p>
          NS Marketing was founded to empower businesses in navigating the digital landscape with tailored marketing solutions. Our journey began with a passion for helping brands connect with their audiences, and today we proudly support numerous clients in achieving measurable growth. With a focus on innovation and results, NS Marketing continues to transform the way businesses engage in the digital world.
          </p>
          {/* Button Group with Icons */}
        
          <p style={{fontFamily: 'DM Sans', fontSize: 18, fontWeight: 400, lineHeight: '28.8px', textAlign: 'left'}}>
            Let’s work together to transform your vision into an <br /> outstanding user experience! <a href="#" className="cta-link">Get In Touch</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Price About End */}


    {/* Price About Start */}
    <section id="price-about">
    <div className="container section">
      <div className="row align-items-center">
        {/* Image Section */}

        {/* Content Section */}
        <div className="col-md-6 content-section">
          <h2>My Training platform

          </h2>
          <p>
          At NS Training, we’re on a mission to turn aspiring marketers into confident pros! With a focus on bridging the gap between ambition and real-world skills, we’ve trained over 65,000 students, and counting! Our fun and practical courses are designed to empower individuals with the tools they need to thrive in the digital marketing landscape. We believe that learning should be hands-on and engaging, so our approach ensures that every student leaves ready to turn their dreams into reality. 

          </p>
          {/* Button Group with Icons */}
          
          <p style={{fontFamily: 'DM Sans', fontSize: 18, fontWeight: 400, lineHeight: '28.8px', textAlign: 'left'}}>
            Let’s work together to transform your vision into an <br /> outstanding user experience! <a href="#" className="cta-link">Get In Touch</a>
          </p>
        </div>
        <div className="col-md-6 image-section">
          <img src="asset/p-a.png" alt="Experience Design Image" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  {/* Price About End */}


  {/* Work Start */}
  <section id="price-work">
    <div className="container text-center py-5">
      <h6 className=" mb-3" style={{fontFamily: 'DM Sans', fontSize: 18, fontWeight: 400, lineHeight: '21.6px', textAlign: 'center', color: '#B3B3B3'}}>HOW IT WORKS</h6>
      <h1 className="section-title mb-4" style={{fontFamily: 'DM Sans', fontSize: 56, fontWeight: 400, lineHeight: '72.8px', textAlign: 'center', color: '#FFFFFF'}}>From Concept to Creation</h1>
      <p className="section-subtitle mb-5" style={{fontFamily: 'DM Sans', fontSize: 18, fontWeight: 400, lineHeight: '28.8px', textAlign: 'center', color: '#B3B3B3'}}>My team takes care of your audience's needs and aspirations, ensuring every marketing effort reflects the brand’s core mission. It’s about aligning brand presence with purposeful messaging that builds trust and loyalty over time.</p>
      <div className="row">
        {/* Step 1 */}
        <div className="col-md-4 mb-4 price-c">
          <div className="step-label">Step 1</div>
          <div className="step-icon mb-3">
            <i className="fas fa-phone-alt" />
          </div>
          <h5 style={{color: '#FFFFFF', fontFamily: 'DM Sans', fontSize: 24, fontWeight: 400, lineHeight: '31.2px', textAlign: 'center', margin: '1rem 0'}}>Initial Consultation</h5>
          <p className="step-description">Let’s discuss your vision and tailor a strategy that fits your goals.</p>
        </div>
        {/* Step 2 */}
        <div className="col-md-4 mb-4 price-c">
          <div className="step-label">Step 2</div>
          <div className="step-icon mb-3">
            <i className="fas fa-pencil-ruler" />
          </div>
          <h5 style={{color: '#FFFFFF', fontFamily: 'DM Sans', fontSize: 24, fontWeight: 400, lineHeight: '31.2px', textAlign: 'center', margin: '1rem 0'}}>Proposal &amp;  Work</h5>
          <p className="step-description">Receive a detailed proposal and watch our team bring your project to life.</p>
        </div>
        {/* Step 3 */}
        <div className="col-md-4 mb-4 price-c">
          <div className="step-label">Step 3</div>
          <div className="step-icon mb-3">
            <i className="fas fa-paper-plane" />
          </div>
          <h5 style={{color: '#FFFFFF', fontFamily: 'DM Sans', fontSize: 24, fontWeight: 400, lineHeight: '31.2px', textAlign: 'center', margin: '1rem 0'}}>Final Delivery</h5>
          <p className="step-description">Enjoy the satisfaction of seeing your project completed and ready for success!</p>
        </div>
      </div>
      <div className="mt-5">
  <h6 style={{ fontFamily: 'DM Sans', fontSize: 20, fontWeight: 400, lineHeight: '26px', textAlign: 'center', color: '#FFFFFF' }}>
  Let my team take care of all your digital marketing needs.

  </h6>
  <a href="#" className="btn btn-primary btn-lg" 
     style={{ 
       fontFamily: 'DM Sans', 
       fontSize: 14, 
       fontWeight: 500, 
       lineHeight: '21.6px', 
       padding: '16px 30px', 
       marginTop: '1rem' 
     }}>
    Free consultation
  </a>
</div>

    </div>
  </section>
  {/* Work End */}
  {/* Progress Bar Start */}
  <section id="progress">
    <div className="container text-center py-5">
      <h6 className="mb-3" style={{fontFamily: 'DM Sans', fontSize: 18, fontWeight: 400, lineHeight: '21.6px', textAlign: 'center', color: '#000000'}}>MY SKILLS</h6>
      <h1 className="section-title mb-4" style={{fontFamily: 'DM Sans', fontSize: 56, fontWeight: 400, lineHeight: '72.8px', textAlign: 'center', color: '#000000'}}>KEY EXPERTISE IN DESIGN <br/> AND MARKETING</h1>
      <p className="section-subtitle mb-5" style={{fontFamily: 'DM Sans', fontSize: 18, fontWeight: 400, lineHeight: '28.8px', textAlign: 'center', color: '#000000'}}>Offering full 360° digital marketing solutions to meet every need of your brand, driving growth and visibility from all angles.</p>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="d-flex justify-content-between">
            <h6>Facebook and Instagram Ads</h6>
            <p>98%</p>
          </div>
          <div className="progress">
            <div className="progress-bar   bg-black" role="progressbar" style={{width: '98%'}} />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex justify-content-between">
          <h6>Search Engine Optimization (SEO)</h6>
          <p>86%</p>
          </div>
          <div className="progress">
            <div className="progress-bar bg-black " role="progressbar" style={{width: '86%'}} />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex justify-content-between">
          <h6>E-commerce Development</h6>
          <p>86%</p>
          </div>
          <div className="progress">
            <div className="progress-bar bg-black " role="progressbar" style={{width: '86%'}} />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex justify-content-between">
          <h6>Graphics and UI/UX Designing</h6>
          <p>98%</p>
          </div>
          <div className="progress">
            <div className="progress-bar bg-black " role="progressbar" style={{width: '98%'}} />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex justify-content-between">
          <h6>PPC Marketing</h6>
            <p>90%</p>
          </div>
          <div className="progress">
            <div className="progress-bar bg-black " role="progressbar" style={{width: '90%'}} />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="d-flex justify-content-between">
          <h6>Mobile App Development</h6>
          <p>90%</p>
          </div>
          <div className="progress">
            <div className="progress-bar bg-black " role="progressbar" style={{width: '90%'}} />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Progress Bar End */}

  {/* Footer Section Start */}
     <Footer/>
  {/* Footer Section End */}
</div>

      
    </div>
  )
}

export default About
