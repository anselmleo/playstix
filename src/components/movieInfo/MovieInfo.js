import React, { useState } from "react";
import Style from "./MovieInfo.module.css";
import { Row, Col, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
function MovieInfo({ movie }) {
  console.log("kkk", movie);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <Row>
        <Col sm={12}>
          <div className={Style.title}>{movie.title}</div>
          {movie && (
            <div>
              <div className={Style.desc}>
                <span className={Style.datetitle}>Release Date :</span>{" "}
                <span className={Style.date}> {movie.release_date}</span>
              </div>
              <div className={Style.rating}>
                <div className={Style.votetext}>Vote Average : </div>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={30}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                  value={movie.vote_average - 3}
                />
              </div>
            </div>
          )}
          {/* <div className={Style.desc}>{movie.overview}</div> */}
          {/* {movie && (
            <div className={Style.buttonContainer}>
              <Button
                style={{
                  backgroundBlendMode: "darken",
                  backgroundColor: "rgba(0,0,0,.6)",
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                }}
                className={Style.button}
              >
                Watch Triller
              </Button>
              <Button
                style={{
                  backgroundBlendMode: "darken",
                  backgroundColor: "rgba(0,0,0,.5)",
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                }}
                className={Style.button}
              >
                Download
              </Button>
            </div>
          )} */}
        </Col>
      </Row>
    </div>
  );
}

export default MovieInfo;
