import { Link } from 'react-router-dom';
import './desktop-menu.scss';

const DesktopMenu = () => {
  return (
    <div className="desk-menu">
      <nav className="left">
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/">about</Link></li>
        </ul>
      </nav>
      <nav className="right">
        <ul>
          <li><Link to="/">logo twitter</Link></li>
          <li><Link to="/">logo instagram</Link></li>
          <li><Link to="/">logo linkedin</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default DesktopMenu;
