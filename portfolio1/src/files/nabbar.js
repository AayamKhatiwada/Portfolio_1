// importing libraries
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

// importing images
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {

  // useState to store which link we are currently on
  const [activeLink, setActiveLink] = useState('home');

  // useState to store background color when user scroll or not
  const [scrolled, setScrolled] = useState(false);

  // useEffect weather the user scrolls or not
  useEffect(() => {
    const onScroll = () => {

      // check the y-axis to determine the weather the user scrolled or not
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    // function works only when the user scrlls
    window.addEventListener("scroll", onScroll);

    // removing the event listener when component is removed from dom
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // function to update the current activeLink
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>{/* checking weather it is scrolled or not*/}
      <Container>

        {/* displays logo */}
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />          
        </Navbar.Brand>

        {/* image when displayed in mobile or small screen */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">

          {/* links on the home skills projects */}
          <Nav className="ms-auto">

            {/* storing which link is currently displayed on dom */}
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">

            {/* links for the media icons */}
            <div className="social-icon">
              <a href="https://github.com/AayamKhatiwada"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/AayamKhatiwada"><img src={navIcon2} alt="" /></a>
              <a href="https://github.com/AayamKhatiwada"><img src={navIcon3} alt="" /></a>
            </div>

            {/* Button 'Let's connect' */}
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}