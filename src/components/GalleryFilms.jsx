import { useState, useEffect } from "react";
import { Col, Container, Row, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const GalleryFilms = ({ titles, genre }) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const resp = await fetch(`http://www.omdbapi.com/?s=${titles}&apikey=ddf3b7d`);

        if (resp.ok) {
          const data = await resp.json();
          setFilms(data.Search ? data.Search.slice(0, 6) : []);
        } else {
          throw new Error("Errore nella fetch");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, [titles]); // Si aggiorna solo se cambia `titles`

  return (
    <Container fluid className="px-4 mt-3 bg-dark text-white m-2">
      <h4 className="display-5 fw-semibold mb-3">{genre}</h4>

      {loading && <Spinner animation="border" variant="light" className="d-block mx-auto" />}
      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && (
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {films.map((film) => (
            <Col key={film.imdbID} className="mb-2 text-center px-2">
              <img className="img-fluid hover-effect" src={film.Poster} alt={film.Title} />
              <Link className="btn btn-danger mt-4" to={`/tvShow/MovieDetails/${film.imdbID}`}>
                Dettagli film
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default GalleryFilms;
