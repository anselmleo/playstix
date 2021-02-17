import React, { useState } from "react";
import Style from "./DashboardMovie.module.css";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import MovieInfo from "../movieInfo/MovieInfo";

function DashboardMovie({
  actionMovies,
  movieGenre,
  comedy,
  nollywood,
  drama,
  popular,
  children,
  action,
  imgUrl,
  setImgUrl,
}) {
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
  };

  let handleShowHoverImage = (url, allinfo) => {
    setImgUrl(url);
    setMovie(allinfo);
  };

  let handleHideHoverImage = () => {
    setImgUrl(false);
    setMovie(false);
  };

  const [movie, setMovie] = React.useState([]);

  return (
    <div>
      <div className={Style.tabs}>
        <div
          onClick={children}
          className={movieGenre.children ? Style.active : Style.inactive}
        >
          Children
        </div>
        <div
          onClick={popular}
          className={movieGenre.popular ? Style.active : Style.inactive}
        >
          Popular
        </div>
        <div
          onClick={action}
          className={movieGenre.action ? Style.active : Style.inactive}
        >
          Action
        </div>
        <div
          onClick={drama}
          className={movieGenre.drama ? Style.active : Style.inactive}
        >
          Drama
        </div>
        <div
          onClick={comedy}
          className={movieGenre.comedy ? Style.active : Style.inactive}
        >
          Comedy
        </div>
        <div
          onClick={nollywood}
          className={movieGenre.nollywood ? Style.active : Style.inactive}
        >
          Nollywood
        </div>
      </div>
      <div>
        {" "}
        <div className={Style.movies}>
          <Slider {...settings}>
            {actionMovies.map((actionMovie, index) => {
              let allinfo = actionMovie;
              let url = actionMovie.backdrop_path;
              return (
                <div className={Style.cardcontainer}>
                  <Card
                    onMouseEnter={() => handleShowHoverImage(url, allinfo)}
                    onMouseLeave={handleHideHoverImage}
                    style={{ margin: "20px" }}
                    className={Style.hoverItem}
                  >
                    <Card.Img
                      src={`https://image.tmdb.org/t/p/w300/${actionMovie.poster_path}`}
                    />
                    {/* <button>hello</button> */}
                  </Card>
                </div>
              );
            })}
          </Slider>
        </div>
        <MovieInfo movie={movie} />
      </div>
    </div>
  );
}

export default DashboardMovie;
