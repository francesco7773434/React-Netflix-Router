import { Col, Container, Row } from "react-bootstrap";
import GalleryFilms from "./GalleryFilms";

const TvShow = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="col-12">
          <GalleryFilms titles="harry potter" genre="Harry Potter" />
        </Col>
        <Col className="col-12">
          <GalleryFilms titles="batman" genre="Batman" />
        </Col>
        <Col className="col-12">
          <GalleryFilms titles="superman" genre="Superman" />
        </Col>
      </Row>
    </Container>
  );
};

export default TvShow;
