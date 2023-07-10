import { Link, NavLink } from 'react-router-dom';
import linkedinLogo from '../../assets/logos/icons8-linkedin.svg';
import facebookLogo from '../../assets/logos/icons8-facebook.svg';
import youtubeLogo from '../../assets/logos/icons8-youtube.svg';
import twitterLogo from '../../assets/logos/icons8-twitter.svg';

import './desktop-menu.scss';
import { useState } from 'react';

const DesktopMenu = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  const toggleClass = () => {
    setMenuOpened(!isMenuOpened);
  }

  const closeMenu = () => {
    setMenuOpened(false);
  }

  return (
    <>
      <div className={'desk-menu ' + (isMenuOpened ? 'active' : '')}>
        <div className='desk-menu__container'>
          <nav className="left">
            {/* className={({isActive, isPending}) => {
                return isPending ? 'pending' : isActive ? 'active-menu' : ''
              }} */}
            <ul>
              <li><NavLink onClick={closeMenu} to="/">home</NavLink></li>
              <li><NavLink onClick={closeMenu} to="/contact">contact</NavLink></li>
              <li><NavLink onClick={closeMenu} to="/about">about</NavLink></li>
            </ul>
          </nav>
          <nav className="right">
            <ul>
              <li><Link to="/"><img src={linkedinLogo} alt='Redirect to linkedin'/></Link></li>
              <li><Link to="/"><img src={facebookLogo} alt='Redirect to Facebook'/></Link></li>
              <li><Link to="/"><img src={youtubeLogo} alt='Redirect to Whatsapp'/></Link></li>
              <li><Link to="/"><img src={twitterLogo} alt='Redirect to Twitter'/></Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <div onClick={toggleClass}>
        <a href="#" className={'btn-hamburger'}>
          <span className="btn-hamburger__bar"></span>
          <span className="btn-hamburger__bar"></span>
          <span className="btn-hamburger__bar"></span>
        </a>
      </div>
    </>
  );
}

export default DesktopMenu;
