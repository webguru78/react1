import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
const Contact = () => {
  return (
    <div>
      <div>
  {/* Home Section Start */}
  <section id="contact">
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
              <Link className="nav-link text-white" to="/pricing" style={{ marginLeft: 24 }}>Pricing</Link>
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
          <div className="contact-text">
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Home Section End */}
  {/* Contact Form Start */}
  <section id="form">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-text" style={{marginTop: '3rem', color: 'black'}}>
            <h2 style={{fontFamily: 'DM Sans', fontSize: 56, fontWeight: 400, lineHeight: '72.8px', textAlign: 'left', color: 'black'}}>Contact </h2> <br />
            <h5 style={{fontFamily: 'DM Sans', fontSize: 17, fontWeight: 400, lineHeight: '27.06px', textAlign: 'left', color: '#131114'}}>By Email</h5>
            <p style={{fontFamily: 'DM Sans', fontSize: 18, fontWeight: 400, lineHeight: '36.08px', textAlign: 'left', color: '#131114'}}>daniyalintisaar32@gmail.com</p> <br />
            <h5 style={{fontFamily: 'DM Sans', fontSize: 17, fontWeight: 400, lineHeight: '27.06px', textAlign: 'left', color: '#131114'}}>By Phone</h5>
            <p style={{fontFamily: 'DM Sans', fontSize: 18, fontWeight: 400, lineHeight: '36.08px', textAlign: 'left', color: '#131114'}}>+971 55 523 2006</p> <br />
            <h5 style={{fontFamily: 'DM Sans', fontSize: 17, fontWeight: 400, lineHeight: '27.06px', textAlign: 'left', color: '#131114'}}>By Form</h5>
            <p style={{fontFamily: 'DM Sans', fontSize: 18, fontWeight: 400, lineHeight: '36.08px', textAlign: 'left', color: '#131114'}}>Use the contact form to send <br /> me a message. I'll get back to <br /> you within 24 business hours.</p>
          </div>
        </div>
        <div className="col-md-6">
          <form className="contact-form" action="https://formspree.io/f/mqakppar" method="POST">
            <div className="row mb-3">
              <div className="col">
                <label htmlFor style={{color: 'white'}}>Name</label>
                <input type="text" className="form-control" name="name" required style={{border: 'none', backgroundColor: '#696969', borderBottom: '2px solid white', borderRadius: 0}} />
              </div>
              <div className="col">
                <label htmlFor style={{color: 'white'}}>Email</label>
                <input type="email" className="form-control" name="email" required style={{border: 'none', backgroundColor: '#696969', borderBottom: '2px solid white', borderRadius: 0}} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor style={{color: 'white'}}>Phone No</label>
                <input type="text" className="form-control" name="phone" style={{border: 'none', backgroundColor: '#696969', borderBottom: '2px solid white', borderRadius: 0}} />
              </div>
              <div className="col">
                <label htmlFor style={{color: 'white'}}>Company Name</label>
                <input type="text" className="form-control" name="company" style={{border: 'none', backgroundColor: '#696969', borderBottom: '2px solid white', borderRadius: 0}} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor style={{color: 'white'}}>Web URL</label>
                <input type="url" className="form-control" name="web" style={{border: 'none', backgroundColor: '#696969', borderBottom: '2px solid white', borderRadius: 0}} />
              </div>
              <div className="col">
                <label htmlFor style={{color: 'white'}}>Select Services</label>
                <select className="form-select" required name="select" style={{border: 'none', backgroundColor: '#696969', borderBottom: '2px solid white', borderRadius: 0}}>
                  <option selected disabled />
                  <option>Service 1</option>
                  <option>Service 2</option>
                  <option>Service 3</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor style={{color: 'white'}}>Your Message</label>
              <textarea className="form-control" name="message" rows={3} required style={{border: 'none', backgroundColor: '#696969', borderBottom: '2px solid white', borderRadius: 0}} defaultValue={""} />
            </div>
            <button type="submit" className="btn btn-primary" style={{margin: '1rem 0'}}>Send Your Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Form End */}
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

export default Contact
