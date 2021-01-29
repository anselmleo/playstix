import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import MovieCarousel from "../../components/carousel/MovieCarousel";
import GameCarousel from "../../components/carousel/GameCarousel";
import LandingTitle from "../../components/landingTitle/LandingTitle";
import SignIn from "../../components/signIn/SignIn";
import Style from "./LandingPage.module.css";

function LandingPage({ actionMovies, imgUrl, setImgUrl }) {
  const [movieGenre, setMovieGenre] = useState({
    children: false,
    comedy: false,
    popular: true,
    action: false,
    drama: false,
    nollywood: false,
  });
  const handleChilrenClick = () => {
    setMovieGenre({
      children: true,
      comedy: false,
      popular: false,
      action: false,
      drama: false,
      nollywood: false,
    });
  };

  const handlePopularClick = () => {
    setMovieGenre({
      children: false,
      comedy: false,
      popular: true,
      action: false,
      drama: false,
      nollywood: false,
    });
  };

  const handleComedyClick = () => {
    setMovieGenre({
      children: false,
      comedy: true,
      popular: false,
      action: false,
      drama: false,
      nollywood: false,
    });
  };
  const handleActionClick = () => {
    setMovieGenre({
      children: false,
      comedy: false,
      popular: false,
      action: true,
      drama: false,
      nollywood: false,
    });
  };
  const handleDramaClick = () => {
    setMovieGenre({
      children: false,
      comedy: false,
      popular: false,
      action: false,
      drama: true,
      nollywood: false,
    });
  };

  const handleNollywoodClick = () => {
    setMovieGenre({
      children: false,
      comedy: false,
      popular: false,
      action: false,
      drama: false,
      nollywood: true,
    });
  };

  return (
    <div>
      <div className={Style.contentContainer}>
        <Row className="m-0">
          <Col className="m-0" sm={3}></Col>
          <Col className="m-0" sm={6}>
            <>
              <LandingTitle />

              <MovieCarousel
                movieGenre={movieGenre}
                children={handleChilrenClick}
                popular={handlePopularClick}
                drama={handleDramaClick}
                nollywood={handleNollywoodClick}
                comedy={handleComedyClick}
                action={handleActionClick}
                actionMovies={actionMovies}
                imgUrl={imgUrl}
                setImgUrl={setImgUrl}
              />
              <GameCarousel
                movieGenre={movieGenre}
                children={handleChilrenClick}
                popular={handlePopularClick}
                drama={handleDramaClick}
                nollywood={handleNollywoodClick}
                comedy={handleComedyClick}
                action={handleActionClick}
                actionMovies={actionMovies}
                imgUrl={imgUrl}
                setImgUrl={setImgUrl}
              />
            </>
          </Col>
          <Col className="m-0" sm={3}></Col>
        </Row>
      </div>
    </div>
  );
}

export default LandingPage;
