// src/pages/Home.jsx
import React from 'react';
import './home.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {

  const openGithub = () => {
    window.open('https://github.com/jorgerleonn', '_blank', 'noopener, noreferrer');
  };

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/jorge-rodr%C3%ADguez-le%C3%B3n-55b352227/', '_blank', 'noopener, noreferrer');
  };

  return (
    <>
    <section className='home-section'>

      <div id='home-texto'>
        <h1 id='h1-nombre'>Jorge Rguez.</h1>
        <h1 id='h1-leon'>LEÓN</h1>
        <button className='btn-home' onClick={openGithub}>
          <FontAwesomeIcon icon={faGithub} className='icon-github' />
        </button>
        <button className='btn-home' onClick={openLinkedin}>
          <FontAwesomeIcon icon={faLinkedin} className='icon-linkedin'/>
        </button>
      </div>
    </section>
    </>
  );
};

export default Home;