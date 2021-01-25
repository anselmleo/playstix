import React, { useEffect, useState } from "react";
import { Navbar, Button, Col, Row } from "react-bootstrap";
import MovieCarousel from "../../components/carousel/MovieCarousel";
import GameCarousel from "../../components/carousel/GameCarousel";
import Style from "./LandingPage.module.css";
import movieList from "../../services/movieAPI/movieAPIService";

function LandingPage() {
  const [actionMovies, setActionMovies] = useState([]);
  const [value, setValue] = React.useState(0);
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

  const getActionMovieList = (e) => {
    movieList
      .getAllMovies()
      .then((response) => {
        console.log(response.data.results);
        setActionMovies(response.data.results);
      })
      .catch((e) => {
        console.log("the error", e.response);
      });
  };

  React.useEffect(() => {
    getActionMovieList();
    const interval = setInterval(() => {
      setValue((v) => (v === 20 ? 0 : v + 1));
    }, 6000);
  }, []);

  let images = [];

  actionMovies.map((movies) =>
    images.push(`url(https://image.tmdb.org/t/p/w500/${movies.backdrop_path})`)
  );

  return (
    <div
      style={{
        backgroundImage: images[value],
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitBackgroundSize: "cover",
        // opacity: "0.9",
      }}
      className={Style.body}
    >
      <Navbar className={Style.nav}>
        <Navbar className={Style.logo}>Playstix</Navbar>
        <Button className={Style.signinButton}>Sign-in</Button>
      </Navbar>
      <div className={Style.contentContainer}>
        <Row className="m-0">
          <Col className="m-0" sm={3}></Col>
          <Col className="m-0" sm={6}>
            <div>
              <div className={Style.contentTitle}>
                Unlimited movies,
                <br />
                games, and more.
              </div>
              <div className={Style.contentSubtitle}>
                Watch anywhare, Play anytime
              </div>

              <Button className={Style.submit}>
                Signup for free <i className="ml-2 fas fa-greater-than"></i>
              </Button>
            </div>
            <MovieCarousel
              movieGenre={movieGenre}
              children={handleChilrenClick}
              popular={handlePopularClick}
              drama={handleDramaClick}
              nollywood={handleNollywoodClick}
              comedy={handleComedyClick}
              action={handleActionClick}
              actionMovies={actionMovies}
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
            />
          </Col>
          <Col className="m-0" sm={3}></Col>
        </Row>
      </div>
    </div>
  );
}

export default LandingPage;
