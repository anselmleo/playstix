import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import Style from "./Carousel.module.css";
import Slider from "react-slick";

function MovieCarousel({
  actionMovies,
  movieGenre,
  comedy,
  nollywood,
  drama,
  popular,
  children,
  action,
  imageUrl,
  setImgUrl,
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

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    pauseOnHover: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4500,
    autoplaySpeed: 1000,
    cssEase: "linear",
    swipeToSlide: true,
    // initialSlide: 0,
    rtl: true,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       // slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  let handleShowHoverImage = (url) => {
    setImgUrl(url);
  };

  let handleHideHoverImage = () => {
    setImgUrl(false);
  };

  return (
    <div className={Style.gamecarouselContainer}>
      <div>
        <Slider {...settings}>
          {actionMovies.map((imageCard, index) => {
            let url = imageCard.backdrop_path;
            return (
              <div className={Style.cardcontainer}>
                <Card
                  onMouseEnter={() => handleShowHoverImage(url)}
                  onMouseLeave={handleHideHoverImage}
                  className={Style.card}
                >
                  <Card.Img
                    className={Style.image}
                    src={`https://image.tmdb.org/t/p/w300/${imageCard.poster_path}`}
                  />
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className={Style.tabcontainer}>
        <Row>
          <Col
            onClick={children}
            className={
              movieGenre.children
                ? Style.gameheaderactive
                : Style.headerinactive
            }
          >
            Adventure{" "}
          </Col>
          <Col
            onClick={comedy}
            className={
              movieGenre.comedy ? Style.gameheaderactive : Style.headerinactive
            }
          >
            Arcade
          </Col>
          <Col
            onClick={popular}
            className={
              movieGenre.popular ? Style.gameheaderactive : Style.headerinactive
            }
          >
            Casino
          </Col>
          <Col
            onClick={action}
            className={
              movieGenre.action ? Style.gameheaderactive : Style.headerinactive
            }
          >
            Football
          </Col>
          <Col
            onClick={drama}
            className={
              movieGenre.drama ? Style.gameheaderactive : Style.headerinactive
            }
          >
            Action
          </Col>
          <Col
            onClick={nollywood}
            className={
              movieGenre.nollywood
                ? Style.gameheaderactive
                : Style.headerinactive
            }
          >
            Racing
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MovieCarousel;
