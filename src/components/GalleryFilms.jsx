import { Component } from "react";
import { Col, Container, Row, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

class GalleryFilms extends Component {
  state = {
    films: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchFilms();
  }

  fetchFilms = async () => {
    try {
      const resp = await fetch(`http://www.omdbapi.com/?s=${this.props.titles}&apikey=ddf3b7d`);

      if (resp.ok) {
        const data = await resp.json();

        this.setState({ films: data.Search ? data.Search.slice(0, 6) : [], loading: false });
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    return (
      <Container fluid className="px-4 mt-3 bg-dark text-white m-2">
        <h4 className="display-5 fw-semibold mb-3">{this.props.genre}</h4>

        {this.state.loading && <Spinner animation="border" variant="light" className="d-block mx-auto" />}

        {this.state.error && <Alert variant="danger">{this.state.error}</Alert>}

        {!this.state.loading && !this.state.error && (
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
            {this.state.films.map((film) => (
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
  }
}

export default GalleryFilms;
