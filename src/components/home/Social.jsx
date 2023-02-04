import React from 'react'

function Social() {
  return (
    <div className="home__social">
        <a href="https://github.com/JakubGaszczak?tab=repositories" target="__blank" className="home__social-icon">
            <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.facebook.com/jakub.gaszczak.5/" target="__blank" className="home__social-icon">
            <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/jgk_sw/" target="__blank" className="home__social-icon">
            <i className="fa-brands fa-instagram"></i>
        </a>
    </div>
  )
}

export default Social