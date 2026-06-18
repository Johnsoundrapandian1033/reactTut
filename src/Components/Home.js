import React from "react";
import './Home.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import logo from '../../src/GM-Group.png';
function Home() {
    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

const sendEmail = (e) =>{
    e.preventDefault();
     const serviceId = "service_bdaxuec";
     const templateId = "template_gem2l1i";
     const accKey = "nKrSmLPup2C8Ekyod";
     const templateParam = {
        from_name : name,
        from_email : email,
        to_name : 'John',
        message : message
    }
    emailjs.send(serviceId, templateId, templateParam, accKey)
    .then((response) => {
        alert("Email Send Successfully", response);
        setName('');
        setEmail('');
        setMessage('');
    })
    .catch((error)=>{
        alert("Error Sending Message ", error);
    })
}


  return (
    <>
      {/* Hero Section */}
      <section className="hero text-white d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-3 fw-bold">
            Welcome to ABC Groups
          </h1>

          <p className="lead mt-3">
            Transforming Traditional Business into Digital Success
          </p>

          <button className="btn btn-primary btn-lg mt-3">
            Explore More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">
            About Us
          </h2>

          <p className="text-center">
            ABC Groups provides innovative business solutions,
            web technologies, digital transformation and consulting
            services for modern businesses.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">
            Our Services
          </h2>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <div className="card-body text-center">
                  <h4>Web Development</h4>
                  <p>
                    Modern responsive websites and web applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <div className="card-body text-center">
                  <h4>Digital Marketing</h4>
                  <p>
                    SEO, Social Media and Branding Solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <div className="card-body text-center">
                  <h4>Business Consulting</h4>
                  <p>
                    Helping companies scale and grow efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-3">
              <h2 className="text-primary">500+</h2>
              <p>Clients</p>
            </div>

            <div className="col-md-3">
              <h2 className="text-primary">120+</h2>
              <p>Projects</p>
            </div>

            <div className="col-md-3">
              <h2 className="text-primary">15+</h2>
              <p>Years Experience</p>
            </div>

            <div className="col-md-3">
              <h2 className="text-primary">24/7</h2>
              <p>Support</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">
            Contact Us
          </h2>

          <div className="row justify-content-center">
            <div className="col-md-6">

              <form onSubmit={sendEmail}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    onChange = {(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                    onChange = {(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;