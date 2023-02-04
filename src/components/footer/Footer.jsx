import React from 'react'
import "../../css/footer.css"

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Jakub</h1>
            
            <div className="footer__social">

                <a href="https://github.com/JakubGaszczak?tab=repositories" target="__blank" className="footer__social-link">
                    <i className="fa-brands fa-github"></i>
                </a>

                <a href="https://www.facebook.com/jakub.gaszczak.5/" target="__blank" className="footer__social-link">
                    <i className="fa-brands fa-linkedin"></i>
                </a>

                <a href="https://www.instagram.com/jgk_sw/" target="__blank" className="footer__social-link">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            
            </div>

            <span className="footer__copy">
                &#169; Jakub Gąszczak. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer