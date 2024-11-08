import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       {/* Home Section Start */}
  <section id="home">
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
              <Link className="nav-link text-white" to="/course" style={{ marginLeft: 24 }}>Course</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/price" style={{ marginLeft: 24 }}>Pricing</Link>
            </li>
          </ul>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button className="btn btn-primary" style={{ backgroundColor: 'white', color: '#000000', border: '1px solid #000000', borderRadius: 10, margin: 'auto', display: 'block'}}>Contact Me</button>
          </Link>
        </div>
      </div>
    </nav>
  </section>
  {/* Home Section End */}
    </div>
  )
}

export default Navbar
