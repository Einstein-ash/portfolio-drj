import React from 'react'
import "./About.css"
import ME from '../../assets/me-about.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
        <div className="about_me-image">
         <img src={ME} alt="About Image" />
        </div>
      </div> 

      <div className="about_content">
        <div className="about_cards">

        <article className="about_card">
         <FaAward className='about_icon'/>
         <h5>Leetcode</h5>
         <small>275+ questions</small>
        </article>

        <article className="about_card">
         <FiUsers className='about_icon'/>
         <h5>Codechef</h5>
         <small>Highest rating 1542 </small>
        </article>

        <article className="about_card">
         <VscFolderLibrary className='about_icon'/>
         <h5>Projects</h5>
         <small>6+ Completed</small>
        </article>
        </div>

        <p>I take pride in showcasing my diverse skill set as a highly proficient frontend and backend developer. My passion for competitive programming and love for problem-solving define my commitment to excellence in every technical endeavor.</p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        </div> 
    </section>
  )
}

export default About