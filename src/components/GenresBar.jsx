import { Container, Dropdown } from "react-bootstrap";

const GenresBar = () => {
  return (
    <Container fluid className="p-4  mt-3 bg-dark text-white ">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4 text-white">TV Shows</h2>
          <Dropdown className="ms-4 mt-1">
            <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0 text-white" style={{ backgroundColor: "#221f1f", borderColor: "#221f1f" }}>
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <i className="bi bi-grid icons text-white m-5 fs-4 cursor"></i>
          <i className="bi bi-grid-3x3 icons text-white fs-4 cursor"></i>
        </div>
      </div>
    </Container>
  );
};

export default GenresBar;
