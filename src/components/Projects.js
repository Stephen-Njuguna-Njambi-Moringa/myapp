// import { useState, useEffect } from "react";
// import React from 'react';

// function Projects() {
//     // const [projects, setProjects] = useState([]);
//     // const fetchProjects = async () => {
//     //     let res = await fetch('http://localhost:3000/projects');
//     //     let data = await res.json();
//     //     console.log(data);
//     //     setProjects(data)
//     // };
//     // useState(() => {
//     //     fetchProjects();
//     // }, []);

//     const [projects, setProjects] = useState([]);
//         useEffect(() => {
//             const requestOptions = {
//                 method: 'POST',
//                 headers: {'content-type' : 'application/json'},
//                 body: JSON.stringify({title: 'React Hooks POST Request Example'})
//             };
//             fetch('http://localhost:3000/projects', requestOptions)
//                 .then(response => response.json())
//                 .then(data => setProjects(data.id))
//         })

//     return (
//         <>
//             <div className="card mb-5">
//                 <div className="card-header">
//                 {projects.name}
//                 {projects.id}
//                 </div>
//                 <div className="card-body">
//                     <blockquote className="blockquote mb-0">
//                     <p>A well-known quote, contained in a blockquote element.</p>
//                     <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
//                     </blockquote>
//                 </div>
//             </div> 
//         </>
//     );
// }

// export default Projects;