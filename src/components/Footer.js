//import react

import React from 'react';




function Footer() {
  return (

    <footer className="container-fluid">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-10 justify-content-center" id="footer-col">
          <p>Get in Touch  </p>
          <div id="links">
            <a href="https://github.com/alex-501/" 
              target="_blank" 
              rel="noreferrer" 
              
              className="fa fa-github mx-1" 
              style={{color:'black'}}
              alt="personal link to Github"
              >
            </a></div>
        </div>      </div>
    </footer>

  );
}
//export footer
export default Footer;