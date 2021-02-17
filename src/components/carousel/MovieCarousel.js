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
  setImgUrl,
  imgUrl,
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
  // if (movieSplit.length) {
  //   imageCards.push(movieSplit);
  // }

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
    <div className={Style.moviecarouselContainer}>
      {/* <div className={Style.title}>MOVIES</div> */}
      <div className={Style.tabcontainer}>
        <Row>
          <Col
            onClick={children}
            className={
              movieGenre.children
                ? Style.movieheaderactive
                : Style.headerinactive
            }
          >
            Children{" "}
          </Col>
          <Col
            onClick={comedy}
            className={
              movieGenre.comedy ? Style.movieheaderactive : Style.headerinactive
            }
          >
            Comedey
          </Col>
          <Col
            onClick={popular}
            className={
              movieGenre.popular
                ? Style.movieheaderactive
                : Style.headerinactive
            }
          >
            Popular
          </Col>
          <Col
            onClick={action}
            className={
              movieGenre.action ? Style.movieheaderactive : Style.headerinactive
            }
          >
            Action
          </Col>
          <Col
            onClick={drama}
            className={
              movieGenre.drama ? Style.movieheaderactive : Style.headerinactive
            }
          >
            Drama
          </Col>
          <Col
            onClick={nollywood}
            className={
              movieGenre.nollywood
                ? Style.movieheaderactive
                : Style.headerinactive
            }
          >
            Nollywood
          </Col>
        </Row>
      </div>
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
    </div>
  );
}

export default MovieCarousel;
