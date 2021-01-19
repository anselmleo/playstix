import React from "react";
import { Col, Row, Card, Carousel } from "react-bootstrap";
import Style from "./Carousel.module.css";

function MovieCarousel() {
  return (
    <div className={Style.movieCarousel}>
    <Carousel indicators={false} controls>
      <Carousel.Item>
        {/* <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    /> */}

        <div className={Style.cardcontainer}>
          <Row>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    /> */}

        <div className={Style.cardcontainer}>
          <Row>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
            <Col className="mt-1 p-0" sm={3}>
              <Card className={Style.card}>
                <Card.Img
                  className={Style.image}
                  src="https://media.newyorker.com/photos/593581e785bd115baccba6d2/master/pass/Lane-Ten-Things-about-Wonder-Woman.jpg"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MovieCarousel;
