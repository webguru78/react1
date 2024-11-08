import React from 'react'
import './Style.css'
const Graphic = () => {
  return (
    <div>
      <div>
  {/* Home Section Start */}
  <section id="homes" style={{minHeight: '60vh'}}>
    <nav className="navbar navbar-expand-lg " style={{backgroundColor: '#131114', width: '66%', display: 'block', margin: 'auto', borderRadius: 10, position: 'relative', top: 10}}>
      <div className="container">
        <img src="asset/logo.png" alt className="img-fluid" style={{width: 170}} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="index.html" style={{color: 'white', marginLeft: 20}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html" style={{color: 'white', marginLeft: 20}}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="service.html" style={{color: 'white', marginLeft: 20}}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html" style={{color: 'white', marginLeft: 20}}>Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html" style={{color: 'white', marginLeft: 20}}>Case Study</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="study.html" style={{color: 'white', marginLeft: 20}}>Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html" style={{color: 'white', marginLeft: 20}}>Contact</a>
            </li>
            <button className="btn btn-primary" style={{marginLeft: 50, fontSize: 13}}>Contact Me</button>
          </ul></div>
      </div>
    </nav>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bg-service" data-aos="zoom-in-down" data-aos-duration={800}>
            <h1>Graphics and UI/UX Designing
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Home Section End */}
  {/* Case Section Start */}
  <section id="case">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="works" data-aos="zoom-out" data-aos-duration={1800}>
            <h5>(001)</h5>
            <h4>LooksGood</h4>
          </div>
        </div>
        <div className="col-md-6">
          <div className="works" data-aos="zoom-out" data-aos-duration={1800}>
            <h5>2023</h5>
            <p>Developed a comprehensive mobile app design, landing pages and social media posts for a training startup, featuring a user-friendly interface for courses.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="case-b" data-aos="zoom-out" data-aos-duration={1800}>
            <button className="btn btn-primary">Request a Consultation</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="work-bg">
            <img src="asset/o.png" alt className="img-fluid" data-aos="zoom-out" data-aos-duration={1800} style={{borderRadius: 15, objectFit: 'contain', width: '100%'}} />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="case-content">
            <h2>Problem:</h2>
          </div>
        </div>
        <div className="col-md-8">
          <div className="case-content">
            <p>  NS Training needed a cohesive brand identity and engaging digital presence to attract and retain learners in a competitive market.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="case-content">
            <h2>Solutions:</h2>
          </div>
        </div>
        <div className="col-md-8">
          <div className="case-content">
            <p>Developed a comprehensive mobile app design for the training startup, featuring an intuitive user interface that simplifies course navigation and enhances the learning experience.
            </p>
            <p>Developed user-friendly landing pages featuring clear calls to action and persuasive design elements for seamless enrollment process.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="case-content">
            <h2>Metrics:</h2>
          </div>
        </div>
        <div className="col-md-8">
          <div className="case-content">
            <li>Increased brand recognition, leading to collaborations with highly acclaimed academia such as <b>UET, UOL, UMT.</b></li>
            <li>Contributed to a <b>40% rise</b> in engagement across social media platforms leading to more enrollments.</li>
            <li>Established a consistent brand aesthetic that enhanced credibility and trust among potential students.</li>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Case Section End */}
  <footer className="footer pt-5 pb-3 text-white">
    <div className="container">
      <div className="row">
        {/* Logo and Intro */}
        <div className="col-md-4 col-12 text-center text-md-start mb-4 mb-md-0">
          <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
            <img src="asset/gl.png" alt="USEO Logo" style={{height: 50}} /> {/* Replace with your logo path */}
          </div>
          <p>Now you know about us, we’d love to get to know you better. Why not drop us a message today and introduce yourself? It could be the beginning of a beautiful relationship!</p>
          <p>Dubai | Toronto | Riyadh</p>
          <div className="social-icons d-flex justify-content-center justify-content-md-start">
            <a href="#" className="text-white me-3"><i className="fab fa-youtube" /></a>
            <a href="#" className="text-white me-3"><i className="fab fa-facebook" /></a>
            <a href="#" className="text-white"><i className="fab fa-linkedin" /></a>
          </div>
        </div>
        {/* Contact Info */}
        <div className="col-md-3 col-6 mb-4 mb-md-0 text-center text-md-start border-start-md border-light ps-md-4">
          <h6>Contact Us</h6>
          <p>1207 Mazaya BB2 JLT, Dubai</p>
          <p>Call Us: +971 4 442 6518</p>
          <p>Email Us: info@useo.ae</p>
          <p><a href="#" className="text-white">Send Inquiry Request</a></p>
          <p><a href="#" className="text-white">Schedule Meeting</a></p>
        </div>
        {/* Solutions */}
        <div className="col-md-3 col-6 mb-4 mb-md-0 text-center text-md-start border-start-md border-light ps-md-4">
          <h6>Dive Into the Solutions</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Web Design &amp; Development</a></li>
            <li><a href="#" className="text-white">Digital Marketing</a></li>
            <li><a href="#" className="text-white">Social Media Marketing</a></li>
            <li><a href="#" className="text-white">Branding</a></li>
            <li><a href="#" className="text-white">Digital Consultancy</a></li>
          </ul>
        </div>
        {/* Quick Links */}
        <div className="col-md-2 col-12 text-center text-md-start border-start-md border-light ps-md-4">
          <h6>Quick Links</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Blogs</a></li>
            <li><a href="#" className="text-white">E-Books</a></li>
            <li><a href="#" className="text-white">Who We Are?</a></li>
            <li><a href="#" className="text-white">Contact Us</a></li>
            <li><a href="#" className="text-white">Schedule Meeting</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>Copyright © 2023 USEO.</p>
      </div>
    </div>
  </footer>
</div>

    </div>
  )
}

export default Graphic
