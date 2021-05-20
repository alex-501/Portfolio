

//import react
//../assets/images/ ...
import React from 'react';
////
//about section
function About() {
  return (

    <section className="col-10" id="about-me">
    <h1>About Me</h1>

    <div className="row justify-content-center" id="about-me-image">
      <img src={personalImage}  /></div>
    <div className="row justify-content-center" id="about-me-text">
      <div className="col-sm-12 col-lg-2"></div>
      <div className="col-sm-12 col-lg-8">
        <p>
        My name is Alexis Rodriguez, I am a full stack developer, and was a Sawyer and a welder in the Past
        </p>
        

      </div>
      <div className="col-sm-12 col-lg-2"> </div> </div>
  </section>


  );
}

export default About;