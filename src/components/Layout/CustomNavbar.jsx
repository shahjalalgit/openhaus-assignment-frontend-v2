import { Container, Nav, Navbar } from "react-bootstrap";
import brandLogo from "../../assets/openhaus-brand-logo.png";
import { useNavigate } from "react-router-dom";
function CustomNavbar() {
  const navigate = useNavigate();
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  onClick={()=> navigate('/')}>
          <img
            src={brandLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span className="mx-2">Openhush</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"variant="underline">
            <Nav.Item>
              <Nav.Link onClick={()=> navigate('/')}>Image Library</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=> navigate('/gallery')}>Gallery</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
