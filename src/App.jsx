import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Study from './components/Study';
import Graphic from './components/Graphic'; // Importing Graphic
import Price from './components/Price';     // Importing Price
import Contact from './components/Contact';   // Importing Contact
import Ecommerce from './components/Ecommerce'; // Importing Ecommerce
import Facebook from './components/Facebook';   // Importing Facebook
import Payment from './components/Payment';
import Seo from './components/Seo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Course from './components/Course';
import { Avatar } from './components/Avatar';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/study" element={<Study />} />
        <Route path="/graphic" element={<Graphic />} /> // New route for Graphic
        <Route path="/price" element={<Price />} />     // New route for Price
        <Route path="/contact" element={<Contact />} />   // New route for Contact
        <Route path="/ecommerce" element={<Ecommerce />} /> // New route for Ecommerce
        <Route path="/facebook" element={<Facebook />} />   // New route for Facebook
        <Route path="/payment" element={<Payment />} />   // New route for Payment
        <Route path="/seo" element={<Seo />} />   // New route for Payment
        <Route path="/course" element={<Course />} />   // New route for Payment
      </Routes>
    </div>
  );
}

export default App;
