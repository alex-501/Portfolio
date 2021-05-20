//import ./components/ ____


import Portfolio from './components/Portfolio';

import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


import React, { useState } from 'react';
import Nav from './components/Nav';
import Namebar from './components/Namebar';
import About from './components/About';
//portfolio, contact, resume, footer

//make function
function App() 

//declare constants true false statements
//https://stackoverflow.com/questions/58860021/why-react-hook-usestate-uses-const-and-not-let
//about
{  const [aboutSelected, setAboutSelected] = useState(true);
  
//portfolio  
const [portfolioSelected, setPortfolioSelected] = useState(false);
//resume  
const [resumeSelected, setResumeSelected] = useState(false);
//contact  
const [contactSelected, setContactSelected] = useState(false);
//make categories  
const [categories] = useState([
    { name: 'About Me' },   { name: 'Say Hello' },
    { name: 'Portfolio' }, { name: 'Resume' }])


  const [currentCategory, setCurrentCategory] = useState(categories[0]);

//then return staement
//html nav
  return (
    <div style={{ backgroundColor: 'rgba(249, 240, 244, 0.831)' }}>
      
      {/* <body> */}
      <main>
        <div className="container-fluid">
          <Nav
            categories={categories}  setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            aboutSelected={aboutSelected}            setAboutSelected={setAboutSelected}
            portfolioSelected={portfolioSelected}           setPortfolioSelected={setPortfolioSelected}
            contactSelected={contactSelected}  setContactSelected={setContactSelected} 
                        resumeSelected={resumeSelected}  setResumeSelected={setResumeSelected}
          ></Nav>
          <div className="row" id="main-row">
            <Namebar></Namebar>    {contactSelected && <ContactForm></ContactForm>}
               {aboutSelected && (<About> </About>)}
            {portfolioSelected && <Portfolio></Portfolio>}
        
            {resumeSelected && <Resume></Resume>}
          </div>

        </div></main>
      
      <Footer>

      </Footer>
    </div>);}



//export app
export default App;
