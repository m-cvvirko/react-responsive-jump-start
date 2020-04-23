import React, { useRef } from 'react';
import BannerTop from "./components/topbanner/HeaderTopBanner";

import './App.css';
import AppRoutes from './AppRoutes';
import AppNavi from './AppNavi';
function App() {

  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle('menu-collapse');
  };

  const hideNavMenu = () => {
    if (!navbarLinks.current.classList.contains('menu-collapse')) {
      navbarLinks.current.classList.add('menu-collapse');
    }
  };

  return (
    <div className="App">
      <BannerTop />
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href="/" className='brand-title' alt="" >Brand Name</a>
          <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div ref={navbarLinks} className='navbar-links menu-collapse'>
            <AppNavi />

            {/* <ul className='links-list'>
              <li className='nav-item'>
                <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/'>Home</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/about'>About</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/contact'>Contact</NavLink>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
      start
      <AppRoutes hideMenu={() => { hideNavMenu(); }} />
    </div>
  );
}

export default App;
