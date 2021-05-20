//import react use effect
import React, { useEffect } from 'react';

//set to props
function Nav(props) {
  const 
  {  currentCategory,    aboutSelected,    setAboutSelected,    portfolioSelected,    setPortfolioSelected,
    contactSelected,    setContactSelected,
    resumeSelected,    setResumeSelected} = props;
  


    //usect
  useEffect(() => 
  {  document.title = (currentCategory.name); },
   [currentCategory]);
  
  
   return (

    <nav className="navbar sticky-top navbar-expand-md navbar-dark row" id="navbar">

    <div className="col-2" id="main-row"></div>

      <div className="collapse navbar-collapse col-10" id="navbarNav">
        <ul className="navbar-nav">

          <li className={`mx-3 nav-item ${aboutSelected && 'navActive'}`}>
            <span onClick={() => {
              setAboutSelected(true),               setPortfolioSelected(false),              setContactSelected(false),              setResumeSelected(false)}}>
              About Me</span>
          </li>
          <li className={`mx-3 nav-item ${portfolioSelected && 'navActive'}`}>
            <span onClick={() => 
            {  setAboutSelected(false),              setPortfolioSelected(true),              setContactSelected(false),              setResumeSelected(false)}}>


              Portfolio</span>          </li>




          <li className={`mx-3 nav-item ${contactSelected && 'navActive'}`}>
            
            <span onClick={() => 
            {  setAboutSelected(false),              setPortfolioSelected(false),
              setContactSelected(true),              setResumeSelected(false) }}
            >
              Say Hello</span>
          </li>
          <li className={`mx-3 nav-item ${resumeSelected && 'navActive'}`}>
            <span onClick={() => {
              setAboutSelected(false),       setPortfolioSelected(false),
              setContactSelected(false),      setResumeSelected(true) }}>
              Resume</span>
          </li>        </ul>      </div> </nav>);}


//expor nav
export default Nav;
