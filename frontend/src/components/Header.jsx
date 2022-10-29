import Logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={Logo}
              width="60"
              height="60"
              className="d-inline-block align-middle"
            />{' '}
            Build Private Ethereum Network
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/networkList">Networks List</Nav.Link>
            <Nav.Link as={Link} to="/nodesList">Node List</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/company">Company</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    )
}