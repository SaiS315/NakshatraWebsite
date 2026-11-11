import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import nakshatraLogo from '../assets/NakshatraLogo.png';
import '../App.css';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 8);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`nakshatra-navbar${isScrolled ? ' nakshatra-navbar-scrolled' : ''}`}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" aria-label="Nakshatra home">
          <img className="navbar-logo" src={nakshatraLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="main-nav"
          style={{ borderColor: 'var(--border-gold)', filter: 'invert(0.7)' }}
        />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto gap-1">
            <Nav.Link as={NavLink} to="/" end className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/competition" className="nav-link-custom">Competition</Nav.Link>
            <Nav.Link as={NavLink} to="/events" className="nav-link-custom">Events</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link as={NavLink} to="/apply" className="nav-link-custom">Apply</Nav.Link>
            <Nav.Link as={NavLink} to="/sponsors" className="nav-link-custom">Sponsors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
