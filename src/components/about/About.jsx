import React from 'react'
import "../../css/about.css"
import AboutImg from "../../assets/profile2.jpg"
import Info from './Info'

function About() {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="profile img" className='about__img' />

            <div className="about__data">
                <Info />

                <p className='about__description'>My interest in programming emerged when I attempted to set up an 
                  online store and tried to create a customized website from scratch, 
                  starting with WordPress. I am self-taught, and I try to use my free 
                  time outside of work to expand my knowledge and become 
                  a better programmer</p>

                <a download="" href="" className="button button--flex">Download CV
                <i className="fa-regular fa-file"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About