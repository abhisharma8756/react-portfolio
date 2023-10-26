import React, {useState} from 'react';
import "./qualification.css"

const Qualification = () => {
  const [toggleState, settoggleState] = useState(1);

  const toggleTab = (index) => {
    settoggleState(index);
  }
  return (
   <section className="qualification section">
     <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal jounrney</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div> 

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content" }>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">BTech</h3>
              <span className="qualification__subtitle">BIET Lucknow</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2019 - 2023
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
              <h3 className="qualification__title">Intermediate</h3>
              <span className="qualification__subtitle">JP Intermediate College</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2018 - 2019
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">High School</h3>
              <span className="qualification__subtitle">UVM Public School</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2018 - 2019
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          {/* <div className="qualification__data">
            <div></div>
            
          <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
              
            <div>
              <h3 className="qualification__title">BTech</h3>
              <span className="qualification__subtitle">BIET Lucknow</span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> 2019 - 2023
              </div>
            </div>
          </div> */}
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content" }>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Bharat Interns</h3>
              <span className="qualification__subtitle">Web Developer</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 05/2023 - 06/2023
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          {/* <div className="qualification__data">
            <div></div>

          <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
              
            <div>
              <h3 className="qualification__title">BTech</h3>
              <span className="qualification__subtitle">BIET Lucknow</span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> 2019 - 2023
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">BTech</h3>
              <span className="qualification__subtitle">BIET Lucknow</span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> 2019 - 2023
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div> */}
          </div>
        </div>
      </div>
   </section>
  )
}

export default Qualification
