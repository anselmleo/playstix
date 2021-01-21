import React, { useEffect, useState } from "react";
import { Col, Row, Card, Carousel } from "react-bootstrap";
import Style from "./Carousel.module.css";
import movieList from "../../services/movieAPI/movieAPIService";

function MovieCarousel() {
  const [actionMovies, setActionMovies] = useState([]);
  const [movieImage, setMovieImage] = useState("");
  const getActionMovieList = (e) => {
    movieList
      .getAllMovies()
      .then((response) => {
        console.log("response", response);
        setActionMovies(response.data.results);
      })
      .catch((e) => {
        console.log("the error", e.response);
      });
  };

  useEffect(() => {
    getActionMovieList();
  }, []);

  console.log("got response", actionMovies);

  // movieList.getAllMovieImages(actionMovie.backdrop_path)
  // .then((response) => {

  //  console.log(response)
  // })
  // .catch((e) => {
  //   console.log("ddddd", e.response);
  // })

  return (
    <div>
      <Carousel indicators={false} controls>
        <Carousel.Item interval={1000}>
          <div className={Style.cardcontainer}>
            <Row>
              {actionMovies.map((actionMovie) => (
                <Col className="mt-1 p-0" sm={3}>
                  <Card className={Style.card}>
                    <Card.Img
                      className={Style.image}
                      src={`https://image.tmdb.org/t/p/w300/${actionMovie.backdrop_path}`}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={Style.cardcontainer}>
            <Row>
              {actionMovies.map((actionMovie) => (
                <Col className="mt-1 p-0" sm={3}>
                  <Card className={Style.card}>
                    <Card.Img
                      className={Style.image}
                      src={`https://image.tmdb.rg/t/p/w300/${actionMovie.backdrop_path}`}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MovieCarousel;
