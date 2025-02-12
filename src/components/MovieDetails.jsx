import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Spinner, Alert } from "react-bootstrap";

const MovieDetails = () => {
  const { imdbID } = useParams(); // Recupera l'ID dalla URL
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const resp = await fetch(`http://www.omdbapi.com/?i=${imdbID}tt3896198&apikey=cbd0824d`);
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
  }, [imdbID]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Card>
      <Card.Img variant="top" src={film.Poster} alt={film.Title} />
      <Card.Body>
        <Card.Title>{film.Title}</Card.Title>
        <Card.Text>{film.Plot}</Card.Text>
        <Button variant="primary">Torna Indietro</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieDetails;
