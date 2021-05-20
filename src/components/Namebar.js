//react import
import React from 'react';
import background from "../assets/images/annie-spratt-gSQbip5HHuc-unsplash.jpg";


//namebar
function Namebar() {
  return (
//return
    <div className="col-2" id="name-bar" >
      <div id="name">
        <p>Alexis </p>
        <p>Rodriguez</p>
        <div id="name-bar-after" style={{ backgroundImage: `url(${background})`, position: 'absolute', backgroundSize: 'cover' }} /></div>    </div>);}
//namebar exprt
export default Namebar;