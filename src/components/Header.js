import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar className='navbar' expand='lg'>
      <Container className='nav-container d-flex justify-content-between align-items-center'>
        <Link className='nav-logo text-white fs-3 nav-logo scale' to='/'>
          ANIMESAGE
        </Link>
        <Nav>
          <Link className='text-white px-5 fs-4 nav-link scale' to='/Search'>
            Search
          </Link>
          <Nav.Link
            className='text-white px-5 fs-4 nav-link slide-in'
            href='https://github.com/Woound/AnimeSage'
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
