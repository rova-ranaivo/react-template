import './topmenu.scss';

const TopMenu = () => {
  const name = 'Whatever';
  return (
    <div className="top-menu">
      <p>{name}</p>

      <a href="#" className="btn-hamburger">
        <span className="btn-hamburger__bar"></span>
        <span className="btn-hamburger__bar"></span>
        <span className="btn-hamburger__bar"></span>
      </a>

      <nav className="top-menu__navbar">
        <ul className="top-menu__navbar__list">
          <li className="top-menu__navbar__item">
            <a href="#">Home</a>
          </li>
          <li className="top-menu__navbar__item">
            <a href="#">Services</a>
          </li>
          <li className="top-menu__navbar__item">
            <a href="#">Contact</a>
          </li>
          <li className="top-menu__navbar__item">
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopMenu;