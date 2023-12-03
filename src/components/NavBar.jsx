
import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';
import { IoMdHome, IoIosCall, IoMdPerson, IoMdImages } from 'react-icons/io';
import logoLuciano from '../assets/img/Logo-lm.png';
import logo_header from '../assets/img/logo.png';

const MobileMenu = ({ closeMenu }) => {
  const handleNavItemClick = () => {
    closeMenu();
  };

  return (
    <div className="menu">
      <div className="card-mobile-open">
        <img className="lm-logo" src={logoLuciano} alt="luciano moreira" />
        <h2>Luciano Moreira</h2>
        <Link to="/" className="nav-item" onClick={handleNavItemClick}>
          <IoMdHome className="icon" />
          Início
        </Link>
        <Link to="/contact" className="nav-item" onClick={handleNavItemClick}>
          <IoIosCall className="icon" />
          Contato
        </Link>
        <Link to="/about" className="nav-item" onClick={handleNavItemClick}>
          <IoMdPerson className="icon" />
          Sobre Mim
        </Link>
        <Link to="/imagens" className="nav-item" onClick={handleNavItemClick}>
          <IoMdImages className="icon" />
          Imagens
        </Link>
      </div>
    </div>
  );
};

const NavBar = () => {
  const location = useLocation();
  const [activeNavItem, setActiveNavItem] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuIconClose, setIsMenuIconClose] = useState(false);

  useEffect(() => {
    setActiveNavItem(location.pathname);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMenuIconClose(!isMenuIconClose);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMenuIconClose(false);
  };

  return (
    <header className="container-header">
      <div className="logo">
        <Link to="/">
          <img src={logo_header} alt="logo da empresa" />
        </Link>
      </div>
      <div
        id="navbar"
        className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
      >
        <Link
          to="/"
          className={`nav-item ${activeNavItem === '/' ? 'active' : ''}`}
        >
          <IoMdHome className="icon" />
          Início
        </Link>
        <Link
          to="/contact"
          className={`nav-item ${
            activeNavItem === '/contact' ? 'active' : ''
          }`}
        >
          <IoIosCall className="icon" />
          Contato
        </Link>
        <Link
          to="/about"
          className={`nav-item ${activeNavItem === '/about' ? 'active' : ''}`}
        >
          <IoMdPerson className="icon" />
          Sobre Mim
        </Link>
        <Link
          to="/imagens"
          className={`nav-item ${
            activeNavItem === '/imagens' ? 'active' : ''
          }`}
        >
          <IoMdImages className="icon" />
          Imagens
        </Link>
      </div>
      <div className="botaoMobile">
        <button onClick={toggleMobileMenu}>
          {isMenuIconClose ? (
            <IoMdHome className="icon-mobile" />
          ) : (
            <IoMdHome className="icon-mobile" />
          )}
        </button>
      </div>
      {isMobileMenuOpen && <MobileMenu closeMenu={closeMobileMenu} />}
    </header>
  );
};

export default NavBar;