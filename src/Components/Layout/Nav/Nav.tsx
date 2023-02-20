import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGift } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';

import './Nav.css';

export const Nav = () => {
  return (
    <>
    <nav>
      <section>
        <div className='logo'>
          <img src="src/Assets/img/logo.svg" alt="logo" />
        </div>
        <div>
          <ul className='links'>
            <li>
              {/* <a href="https://www.linkedin.com/in/andressierrarojas/" target="_blank">
                <FontAwesomeIcon icon={faLink} />
              </a> */}
              <span className='icon'><i></i></span>
              <span className='title'>Linkedin</span>
            </li>
            <li>
              {/* <a href="https://www.linkedin.com/in/andressierrarojas/" target="_blank">
                <FontAwesomeIcon icon={faLink} />
              </a> */}
              <span className='icon'><i></i></span>
              <span className='title'>GitHub</span>
            </li>
          </ul>
        </div>
      </section>
    </nav>
    </>
  )
}
