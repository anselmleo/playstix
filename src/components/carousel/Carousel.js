import { Col, Row, Card, Carousel } from "react-bootstrap";
import Style from "./Carousel.module.css";

function MovieCarousel({ actionMovies }) {
  let movieSplit = [];
  let imageCards = [];
  actionMovies.forEach((card) => {
    movieSplit.push(card);
    if (movieSplit.length === 8) {
      imageCards.push(movieSplit);
      movieSplit = [];
    }
  });
  if (movieSplit.length) {
    imageCards.push(movieSplit);
  }

  return (
    <div>
      <Carousel indicators={false} controls={true}>
        {imageCards.map((imageCard, index) => (
          <Carousel.Item key={index}>
            <div className={Style.cardcontainer}>
              <Row>
                {imageCard.map((card) => (
                  <Col key={card.id} className="mt-1 p-0" sm={3}>
                    <Card className={Style.card}>
                      <Card.Img
                        className={Style.image}
                        src={`https://image.tmdb.org/t/p/w300/${card.backdrop_path}`}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MovieCarousel;
