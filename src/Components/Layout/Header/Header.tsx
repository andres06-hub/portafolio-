import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../Assets/img/Logo.svg';
import as from '../../../Assets/img/as.svg';

import './Header.css';

export const Header = () => {
  return (
    <header className='header-container'>
      <nav>
        <section className='nav-content'>
          <div className='logo'>
            <img src={as} alt="logo AS" />
          </div>
          <div>
            <ul className='links'>
              <li>
                <a href="https://www.linkedin.com/in/andressierrarojas/" target="_blank">
                  <span>
                    <FontAwesomeIcon className='networks linkedin' icon={['fab', 'linkedin-in']}/>
                  </span>
                  {/* <span className='text'>Linkedin</span> */}
                </a>
                {/* <span className='title'>Linkedin</span> */}
              </li>
              <li>
                <a href="https://www.github.com/andres06-hub/" target="_blank">
                  <FontAwesomeIcon className='networks github' icon={['fab', 'github']}/>
                </a>
                <span className='icon'><i></i></span>
                {/* <span className='title'>GitHub</span> */}
              </li>
              <li>
                <a href="https://twitter.com/Andressr06" target="_blank">
                  <FontAwesomeIcon className='networks twitter' icon={['fab', 'twitter']}/>
                </a>
                <span className='icon'><i></i></span>
                {/* <span className='title'>Twitter</span> */}
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <article className='descrip-container'>
        <div className='descrip-content'>
          <h2 className='descrip-title'>Software Developer</h2>
          {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quos corrupti non necessitatibus blanditiis harum quidem nesciunt quibusdam suscipit iste id aperiam illo veniam magni quaerat, ea cupiditate repudiandae repellendus.</p> */}
        </div>
      </article>
      <section className='me-container'>
        <div className='me-container-difu'>
          <div className='img-container'>
            <img className='me-img' src={logo} alt="img AS" />
          </div>
        </div>
      </section>
    </header>
  )
}
