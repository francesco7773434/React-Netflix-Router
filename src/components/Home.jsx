import { Col, Container, Row } from "react-bootstrap";
import GalleryFilms from "./GalleryFilms";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="col-12">
          <GalleryFilms titles="captain america" genre="captain america" />
        </Col>
        <Col className="col-12">
          <GalleryFilms titles="mr bean" genre="mr bean" />
        </Col>
        <Col className="col-12">
          <GalleryFilms titles="marvel" genre="Smarvel" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
