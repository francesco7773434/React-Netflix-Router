import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" style={{ width: 100, height: 60 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link className="fw-bold nav-link" to="/">
              Home
            </Link>
            <Link className="fw-bold nav-link" to="/tvShow">
              TV Shows
            </Link>
            <Link className="fw-bold nav-link">Movies</Link>
            <Link className="fw-bold nav-link">Recently Added</Link>
            <Link className="fw-bold nav-link">My List</Link>
          </Nav>
          <div className="d-flex align-items-center text-white cursor">
            <i className="bi bi-search me-3 cursor" style={{ fontSize: "20px" }}></i>
            <span className="fw-bold me-3 cursor">KIDS</span>
            <i className="bi bi-bell me-3 cursor" style={{ fontSize: "20px" }}></i>
            <i className="bi bi-person-circle cursor" style={{ fontSize: "24px" }}></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
