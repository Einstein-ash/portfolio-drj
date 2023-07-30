import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
   <section id='experience'>
   <h5>What Skills I Have</h5>
   <h2>My Experience</h2>

   <div className="container experience_container">
    <div className="experience_frontend">
    <h3>Frontend Development</h3>
    <div className="experince_content">
      <article className='experience_details'><BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>HTML</h4>
      <small className='text-light'>Experienced</small>
      </div>
      </article>
      
      <article className='experience_details'><BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>CSS</h4>
      <small className='text-light'>Intermediate</small>
      </div>
      </article>
      <article className='experience_details'><BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>Javascript</h4>
      <small className='text-light'>Experienced</small>
      </div>
      </article>
      <article className='experience_details'><BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>Bootstrap</h4>
      <small className='text-light'>Intermediate</small>
      </div>
      </article>
      <article className='experience_details'><BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>React</h4>
      <small className='text-light'>Experienced</small>
      </div>
      </article>
    </div>
    </div>


    <div className="experince_backend">
    <h3>Backend Development</h3>
    <div className="experince_content">
      <article className='experience_details'><BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>Node Js</h4>
      <small className='text-light'>Experienced</small>
      </div>
      </article>
      <article className='experience_details'><BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>Express Js</h4>
      <small className='text-light'>Intermediate</small>
      </div>
      </article>
      <article className='experience_details'><BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>MongoDB</h4>
      <small className='text-light'>Intermediate</small>
      </div>
      </article>
      <article className='experience_details'><BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>MySQL</h4>
      <small className='text-light'>Intermediate</small>
      </div>
      </article>
      
    </div>
    </div>
   </div>
   </section>
  )
}

export default experience