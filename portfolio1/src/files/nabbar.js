import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>

        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />          
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">

            <Nav.Link href="#home" className='navbar-link'>Home</Nav.Link>
            <Nav.Link href="#skills" className='navbar-link'>Skills</Nav.Link>
            <Nav.Link href="#projects" className='navbar-link'>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">

            <div className="social-icon">
              <a href="https://github.com/AayamKhatiwada"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/AayamKhatiwada"><img src={navIcon2} alt="" /></a>
              <a href="https://github.com/AayamKhatiwada"><img src={navIcon3} alt="" /></a>
            </div>

            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}