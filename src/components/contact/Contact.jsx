import React from 'react'
import "../../css/contact.css"

function Contact() {
  return (
    <section className="contact section" id='contact'>
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container">
          <div className="contact__info grid">
            <div className="contact__card">
              <i className="fa-solid fa-envelope"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">jakub.gaszczak2000@gmail.com</span>

              <a href="mailto:jakub.gaszczak2000@gmail.com" className="contact__button">
                Write me{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="fa-solid fa-phone"></i>

              <h3 className="contact__card-title">Phone Number</h3>
              <span className="contact__card-data">882-792-721</span>

              <a href="tel:882792721" className="contact__button">
                Call me{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="fa-brands fa-facebook-messenger"></i>

              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">Jakub Gąszczak</span>

              <a href="https://m.me/jakub.gaszczak.5" className="contact__button">
                Write me{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Contact