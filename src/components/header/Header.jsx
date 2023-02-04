import React, {useState} from 'react'
import '../../css/header.css';

export default function Header() {

    // Change bacgrkound header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        if (this.scrollY >= 80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
    })


    const [toggleMenu, setToggleMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className='nav__logo'>Jakub</a>

            <div className={toggleMenu ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">

                    <li className="nav__item">
                        <a 
                        href="#home" 
                        onClick={() => setActiveNav("#home")} 
                        className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                            <i className="fa-solid fa-house icon"></i>
                            Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a 
                        href="#about" 
                        onClick={() => setActiveNav("#about")} 
                        className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                            <i className="fa-solid fa-user icon"></i>
                            About 
                        </a>
                    </li>

                    <li className="nav__item">
                        <a 
                        href="#skills" 
                        onClick={() => setActiveNav("#skills")} 
                        className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="fa-solid fa-file icon"></i>
                            Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a 
                        href="#qualification" 
                        onClick={() => setActiveNav("#qualification")} 
                        className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                            <i className="fa-solid fa-briefcase icon"></i>
                            Qualification
                        </a>
                    </li>

                    <li className="nav__item">
                        <a 
                        href="#portfolio" 
                        onClick={() => setActiveNav("#portfolio")} 
                        className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                            <i className="fa-solid fa-image icon"></i>
                            Portfolio
                        </a>
                    </li>
                    
                    <li className="nav__item">
                        <a 
                        href="#contact" 
                        onClick={() => setActiveNav("#contact")} 
                        className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i className="fa-solid fa-comment icon"></i>
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="nav__close" onClick={() => setToggleMenu(!toggleMenu)}>
                    <i className="fa-solid fa-xmark icon"></i>
                </div>
            </div>

            <div className="nav__toggle" onClick={() => setToggleMenu(!toggleMenu)}>
                <i className="fa-solid fa-bars icon"></i>
            </div>
        </nav>
    </header>
  )
}
