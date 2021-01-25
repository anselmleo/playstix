import React, { useState } from "react";
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
  //hover,
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

  const [hoverImage, setHoverImage] = React.useState("");

  let handleHoverImage = (imageUrl) => {
    setHoverImage(imageUrl);

    // hover(hoverImage);
    alert(hoverImage);
  };

  return (
    <div className={Style.carouselContainer}>
      <div className={Style.title}>MOVIES</div>
      <div className={Style.tabcontainer}>
        <Row>
          <Col
            onClick={children}
            className={
              movieGenre.children ? Style.headeractive : Style.headerinactive
            }
          >
            Children{" "}
          </Col>
          <Col
            onClick={comedy}
            className={
              movieGenre.comedy ? Style.headeractive : Style.headerinactive
            }
          >
            Comedey
          </Col>
          <Col
            onClick={popular}
            className={
              movieGenre.popular ? Style.headeractive : Style.headerinactive
            }
          >
            Popular
          </Col>
          <Col
            onClick={action}
            className={
              movieGenre.action ? Style.headeractive : Style.headerinactive
            }
          >
            Action
          </Col>
          <Col
            onClick={drama}
            className={
              movieGenre.drama ? Style.headeractive : Style.headerinactive
            }
          >
            Drama
          </Col>
          <Col
            onClick={nollywood}
            className={
              movieGenre.nollywood ? Style.headeractive : Style.headerinactive
            }
          >
            Nollywood
          </Col>
        </Row>
      </div>
      <Carousel indicators={false} controls={true}>
        {imageCards.map((imageCard, index) => (
          <Carousel.Item key={index}>
            <div className={Style.cardcontainer}>
              <Row>
                {imageCard.map((card) => {
                  let imageUrl = `https://image.tmdb.org/t/p/w300/${card.poster_path}`;
                  return (
                    <Col key={card.id} className=" p-1" sm={2}>
                      <Card
                        style={{ zIndex: "99" }}
                        onMouseEnter={() => handleHoverImage(imageUrl)}
                      >
                        <Card.Img
                          className={Style.image}
                          src={`https://image.tmdb.org/t/p/w300/${card.poster_path}`}
                        />
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MovieCarousel;
