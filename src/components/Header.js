import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar className='navbar' expand='lg'>
      <Container className='nav-container d-flex justify-content-between align-items-center'>
        <Navbar.Brand
          className='nav-logo text-white fs-3 nav-logo scale'
          href='#home'
        >
          ANIMESAGE
        </Navbar.Brand>
        <Nav>
          <Link className='text-white px-5 fs-4 nav-link scale' to='/Search'>
            Search
          </Link>
          <Nav.Link
            className='text-white px-5 fs-4 nav-link slide-in'
            href='#search'
          >
            About
          </Nav.Link>
          <Nav.Link
            className='text-white px-5 fs-4 nav-link slide-in'
            href='#search'
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
