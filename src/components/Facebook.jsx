import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
const Facebook = () => {
  return (
    <div>
   <div>
  {/* Home Section Start */}
  <section id="homes" style={{minHeight: '60vh'}}>
  <nav className="navbar navbar-expand-lg" style={{ background: '#000000' }}>
      <div className="container">
        <img src="asset/logo.png" alt="Logo" className="img-fluid" style={{ width: 170 }} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars" style={{ backgroundColor: 'white', color: 'black', padding: '10px 19px', borderRadius: 12 }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/" style={{ marginLeft: 24 }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about" style={{ marginLeft: 24 }}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/service" style={{ marginLeft: 24 }}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/study" style={{ marginLeft: 20 }}>Case Study</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/blogs" style={{ marginLeft: 24 }}>Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/price" style={{ marginLeft: 24 }}>Pricing</Link>
            </li>
          </ul>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000000', border: '1px solid #000000', borderRadius: 10, margin: 'auto', display: 'block' }}>Contact Me</button>
          </Link>
        </div>
      </div>
    </nav>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bg-service" data-aos="zoom-in-down" data-aos-duration={800}>
            <h1>Facebook and Instagram Ads</h1>
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
            <p>Designed a sleek and intuitive e-commerce platform for <br /> a tshirt brand.
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
            <img src="asset/add.png" alt className="img-fluid" data-aos="zoom-out" data-aos-duration={1800} style={{borderRadius: 15}} />
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
            <p>NS Training faced challenges in establishing a strong online presence in a competitive market of online courses, resulting in low engagement and limited brand awareness with less conversions.
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
            <p>By thorough analysis of business plan and market orientation, I designed ad strategies and optimized campaigns specifically for NS Training's target audience and successfully increased account reach, engagement and ROI.
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
            <li>Generated <b>92 million impressions</b></li>
            <li>Achieved a remarkable <b>8.4 million unique reach</b></li>
            <li>Resulted in a <b>substantial increase in course enrollments and inquiries</b></li>
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

export default Facebook
