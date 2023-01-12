import { Outlet, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Layout = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/contact">Contac</Nav.Link>
            <NavDropdown title="Componentes" className="me-auto" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1" href="/alerts">Alerts</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2" href="/accordion">Accordion</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3" href="/badges">Badges</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4" href="/breadcrumbs">Breadcrumb</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.5" href="/buttons">Buttons</NavDropdown.Item>
          </NavDropdown>
          </Nav>
         
        </Container>
      </Navbar>
     
      <Outlet />

    

    </>
  )
};

export default Layout;