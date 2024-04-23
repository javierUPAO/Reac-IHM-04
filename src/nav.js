import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"> <i data-feather = "home"></i> Inicio</Nav.Link>
            <Nav.Link href="#action2"> <i data-feather = "dollar-sign"> </i> Donar</Nav.Link>
            <NavDropdown title="Mascotas" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3"> <i data-feather = "smile"> </i>Perritos </NavDropdown.Item>
              <NavDropdown.Item href="#action4">  <i data-feather = "github"> </i>
                Gatitos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Proximamente ....
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action5"><i data-feather = "map-pin"> </i> Ubicanos </Nav.Link>
            <Nav.Link href="#action6"> <i data-feather = "phone-call"> </i> Contactanos</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;