
import { useState} from "react";
import React from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    let res = await fetch('http://localhost:3000/projects');
    // let res = await fetch('https://app-njambi.herokuapp.com/projects');

    let data = await res.json();
    console.log(data);
    setProjects(data)
  };

  useState(() => {
    fetchProjects();
  }, []);
 

    return (
        <div>
            {projects.map((project) =>{
                return(
                    <div className="card mb-5">
                    <div className="card-header">
                        <h2>{project.project_name}</h2>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{project.project_desc}</p>
                            <footer className="blockquote-footer">{project.owner}</footer>
                        </blockquote>
                    </div>
                </div> 
                )
            })}
        </div>
    );
}

export default Projects;

