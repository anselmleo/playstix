import React, { useEffect, useState } from "react";
import { Col, Row, Card, Carousel } from "react-bootstrap";
import Style from "./Carousel.module.css";

function MovieCarousel({
  actionMovies,
  movieGenre,
  comedy,
  nollywood,
  drama,
  popular,
  children,
  action,
}) {
  let movieSplit = [];
  let imageCards = [];
  actionMovies.forEach((card) => {
    movieSplit.push(card);
    if (movieSplit.length === 6) {
      imageCards.push(movieSplit);
      movieSplit = [];
    }
  });
  if (movieSplit.length) {
    imageCards.push(movieSplit);
  }

  // const { direction, setDirection } = React.useState(null);

  // let handleSlideDirection = (e, direction) => {
  //   setDirection(e.direction);
  // };

  return (
    <div className={Style.carouselContainer}>
      <div className={Style.title}>GAMES</div>
      <div className={Style.tabcontainer}>
        <Row>
          <Col
            onClick={children}
            className={
              movieGenre.children ? Style.headeractive : Style.headerinactive
            }
          >
            Adventure{" "}
          </Col>
          <Col
            onClick={comedy}
            className={
              movieGenre.comedy ? Style.headeractive : Style.headerinactive
            }
          >
            Arcade
          </Col>
          <Col
            onClick={popular}
            className={
              movieGenre.popular ? Style.headeractive : Style.headerinactive
            }
          >
            Casino
          </Col>
          <Col
            onClick={action}
            className={
              movieGenre.action ? Style.headeractive : Style.headerinactive
            }
          >
            Football
          </Col>
          <Col
            onClick={drama}
            className={
              movieGenre.drama ? Style.headeractive : Style.headerinactive
            }
          >
            Action
          </Col>
          <Col
            onClick={nollywood}
            className={
              movieGenre.nollywood ? Style.headeractive : Style.headerinactive
            }
          >
            Racing
          </Col>
        </Row>
      </div>
      <Carousel
        // onSlid={handleSlideDirection}
        // direction={direction}
        indicators={false}
        controls={true}
      >
        {imageCards.map((imageCard, index) => (
          <Carousel.Item key={index}>
            <div className={Style.cardcontainer}>
              <Row>
                {imageCard.map((card) => (
                  <Col key={card.id} className=" p-0" sm={2}>
                    <Card className={Style.card}>
                      <Card.Img
                        className={Style.image}
                        src={`https://image.tmdb.org/t/p/w300/${card.poster_path}`}
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
