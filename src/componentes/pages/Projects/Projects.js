import React from 'react'
import './projects.css'
import TarjetaFlutter from './TarjetaFlutter/TarjetaFlutter.js'
import TarjetaPython from './TarjetaPython/TarjetaPython.js'
import TarjetaReact from './TarjetaReact/TarjetaReact.js'

const Projects = () => {

  return (
    <>

        <section className='projects-section'>
          <div id='projects-texto'>
            <h1>All projects</h1>
          </div>
          <div className='repos-grid'>
          
            <TarjetaFlutter />
            <TarjetaPython />
            <TarjetaReact />

          </div>
        </section>

    </>
  );
};

export default Projects;
