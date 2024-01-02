import { NavItem } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function MainNavComponent() {
  return (
    <Navbar expand="lg" className="main-nav">
      <Container>
        <Navbar.Brand href="/">Punchcode Studio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <NavDropdown title="Resume" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/resume">
                  Overview
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/resume-skills">
                  Skills
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/resume-experience">
                  Experience
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/resume-education">
                  Education
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/home">
                  Download
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown> */}
            <NavItem>
              <Nav.Link as={Link} to="/resume">
                Resume
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/home">
                About
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/galleries">
                Galleries
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavComponent;
