import React, { useEffect, useState } from "react";
import { Navbar, Button, Col, Row } from "react-bootstrap";
import Carousel from "../../components/carousel/Carousel";
import Style from "./LandingPage.module.css";
import movieList from "../../services/movieAPI/movieAPIService";

function LandingPage() {
  const [actionMovies, setActionMovies] = useState([]);
  const [value, setValue] = React.useState(0);

  const getActionMovieList = (e) => {
    movieList
      .getAllMovies()
      .then((response) => {
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
    }, 5000);
  }, []);

  let images = [];

  actionMovies.map((movies) =>
    images.push(`url(https://image.tmdb.org/t/p/w500/${movies.backdrop_path})`)
  );

  return (
    <div
      style={{
        backgroundImage: images[value],
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitBackgroundSize: "cover",
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
            <Carousel actionMovies={actionMovies} />
          </Col>
          <Col className="m-0" sm={3}></Col>
        </Row>
      </div>
    </div>
  );
}

export default LandingPage;
