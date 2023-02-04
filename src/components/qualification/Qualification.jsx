import React, {useState} from 'react'
import "../../css/qualification.css"

function Qualification() {

  const [toggleState, setToggleState] = useState(1)

  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div onClick={() => setToggleState(1)} className={toggleState === 1 ? "qualification__active qualification__button button--flex" : "qualification__button button--flex "}>
                  <i className="fa-solid fa-graduation-cap"></i>
                  Education
                </div>

            
                <div onClick={() => setToggleState(2)} className={toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}>
                  <i className="fa-solid fa-briefcase"></i>
                  Experience
                </div>
            </div>

            <div className="qualification__sections">
              <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                <div className="qualification__data">
                  

                  <div>
                    <h3 className="qualification__title">Śląskie Techniczne Zakłady Naukowe</h3>
                    <span className="qualification__subtitle">Katowice</span>
                    <div className="qualification__calender">
                      <i className="fa-regular fa-calendar-days"></i>
                      2021 - Present
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">Gimnazjum Nr 8</h3>
                    <span className="qualification__subtitle">Katowice</span>
                    <div className="qualification__calender">
                      <i className="fa-regular fa-calendar-days"></i>
                      2013-2016
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Szkoła Podstawowa nr 59 im. J. Matejki</h3>
                    <span className="qualification__subtitle">Katowice</span>
                    <div className="qualification__calender">
                      <i className="fa-regular fa-calendar-days"></i>
                      2007-2013
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
              </div>

              <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Product Designer</h3>
                    <span className="qualification__subtitle">Spain - Institut</span>
                    <div className="qualification__calender">
                      <i className="fa-regular fa-calendar-days"></i>
                      2021 - Present
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">UX Designer</h3>
                    <span className="qualification__subtitle">Spain - Institut</span>
                    <div className="qualification__calender">
                      <i className="fa-regular fa-calendar-days"></i>
                      2021 - Present
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Web Designer</h3>
                    <span className="qualification__subtitle">Spain - Institut</span>
                    <div className="qualification__calender">
                      <i className="fa-regular fa-calendar-days"></i>
                      2021 - Present
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section >
  )
}

export default Qualification