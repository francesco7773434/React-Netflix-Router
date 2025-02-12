import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Spinner, Alert, Container, Row, Col } from "react-bootstrap";

const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const resp = await fetch(`http://www.omdbapi.com/?i=${params.movieID}&apikey=cbd0824d`);
        if (resp.ok) {
          const data = await resp.json();
          setFilm(data);
        } else {
          throw new Error("Errore nel recupero dei dettagli del film");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [params.movieID]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col className="col-4">
          <Card className="mb-5">
            <Card.Img className="w-100 img-fluid" variant="top" src={film.Poster} alt={film.Title} />
            <Card.Body className="bg-dark">
              <Card.Title className="text-white">{film.Title}</Card.Title>
              <Card.Text className="text-white">{film.Plot}</Card.Text>
              <Button variant="danger">Torna Indietro</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
