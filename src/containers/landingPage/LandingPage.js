import React from "react";
import { Navbar, Button, Col, Row } from "react-bootstrap";
import Carousel from "../../components/carousel/Carousel";
import Style from "./LandingPage.module.css";

// const colors = [
//   "white",
//   "black",
//   "blue",
//   "green",
//   "pink",
//   "red",
//   "purple",
//   "yellow",
//   "gray",
//   "lilac",
// ];

function LandingPage() {
  const [value, setValue] = React.useState(0);

  //   React.useEffect(() => {
  //     const interval = setInterval(() => {
  //       setValue((v) => (v === 9 ? 0 : v + 1));
  //     }, 1000);
  //   }, []);

  return (
    <div className={Style.body}>
      <Navbar className={Style.nav}>
        <Navbar className={Style.logo}>Playstix</Navbar>
        <Button className={Style.signinButton}>Sign-in</Button>
      </Navbar>
      <div className={Style.contentContainer}>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
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
            <Carousel />
          </Col>
          <Col sm={3}></Col>
        </Row>
      </div>
    </div>
  );
}

export default LandingPage;
