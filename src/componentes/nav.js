import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles.css';
function NavScrollExample() {
  return (
    <Navbar expand="lg" className='primary'>
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className= "nav-text" href="/home"> <i data-feather = "home"></i> Inicio</Nav.Link>
            <NavDropdown className= "nav-text" title="Melamine" id="navbarScrollingDropdown" >
              <NavDropdown.Item  href="#action3"> Reposteros</NavDropdown.Item>
              <NavDropdown.Item href="#action4"> Escritorios </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className= "nav-text" title="Madera" id="navbarScrollingDropdown" >
              <NavDropdown.Item  href="#action3">  Puertas </NavDropdown.Item>
              <NavDropdown.Item href="#action3">  Marcos </NavDropdown.Item>
              <NavDropdown.Item href="#action4">  Portones </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className= "nav-text" href="#action5"><i data-feather = "map-pin"> </i> Ubicanos </Nav.Link>
            <Nav.Link className= "nav-text" href="#action6"> <i data-feather = "phone-call"> </i> Contactanos</Nav.Link>
            <Nav.Link className= "nav-text" href="/faq"> <i data-feather = "help-circle"> </i> FAQ</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn-primary" variant="success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;