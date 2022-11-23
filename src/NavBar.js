import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  const [search, setSearch] = useState('');
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mymovies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <input style={{ margin: '10px' }} onChange={(e) => setSearch(e.target.value)} />

        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;