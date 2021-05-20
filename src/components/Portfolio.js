


//import usestate, project/data
//react ./project & .projeects.json
import { useState } from 'react';
import Project from './Project';
import projectData from './projects.json'

function Portfolio() 
{  const [projects] = useState(projectData);
//then return html
  return (<section className="col-10" id="projects">
       <h1>Portfolio</h1>
      <div className="row">  



        {projects.map((project, i) => (
      <div className="col-12 col-md-6" key={i}>
         <div className="row">
          <div className="text-center">
      
      
                <div className="project-image-wrapper" >            < Project project={project}/>
                </div>     </div>
            </div>         </div>
        ))} </div>   </section>);}



        
export default Portfolio;