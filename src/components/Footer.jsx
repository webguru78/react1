import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
 <div>
     <footer className="footer pt-5 pb-3 text-white ">
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
      <div className="col-md-3 col-6 f-p mb-4 mb-md-0 text-center text-md-start border-start-md border-light ps-md-4">
        <h6><span className='sp'>|</span><b>Contact Us</b></h6>
        <p>1207 Mazaya BB2 JLT, Dubai</p>
        <p>Call Us: +971 4 442 6518</p>
        <p>Email Us: info@useo.ae</p>
        <p><a href="#" className="text-white">Send Inquiry Request</a></p>
        <p><a href="#" className="text-white">Schedule Meeting</a></p>
      </div>
      {/* Solutions */}
      <div className="col-md-3 col-6 mb-4 mb-md-0 text-center text-md-start border-start-md border-light ps-md-4">
        <h6><span className='sp'>|</span><b>Dive Into the Solutions</b></h6>
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
      <h6><span className='sp'>|</span><b>Quick Links</b></h6>
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
  

  )
}

export default Footer
