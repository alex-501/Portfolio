//import react

import React from 'react';
import resumePDF from '../assets/images/stephanie-resume.pdf'



function Resume()


{  return (
    <section className='col-10' id='skills'>  <h1>Skills</h1>
      <div className='row'>
        <div className='col-6' id='front-end'>
          <h3>Full-Stack  Developer</h3>
          <ul>
            <li>HTML</li>        <li>CSS</li>            <li>JavaScript</li>
            <li>JQuery</li>       <li>React</li>
            <li>Node.js</li>      <li>MySQL</li>
            <li>Express.js</li>      <li>Sequelize</li>
            <li>Handlebars.js</li> <li>NoSQL</li>       
              <li>MongoDB</li>   <li>IndexDB</li>
          </ul>    </div> </div>
      <div className='resume-btn-wrapper'>
        <div className='resume-btn'>
          <a href={resumePDF} download>Download Resume Here</a>
        </div> </div>
    </section>);}

export default Resume;