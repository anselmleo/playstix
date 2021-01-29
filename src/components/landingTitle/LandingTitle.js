import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Style from "./LandingTitle.module.css";

function LandingTitle() {
  return (
    <div>
      <div className={Style.contentTitle}>
        Unlimited movies,
        <br />
        games, and more.
      </div>
      <div className={Style.contentSubtitle}>Watch anywhare, Play anytime</div>
      <Link className="link" to="/register">
        <Button className={Style.submit}>
          Signup for free <i className="ml-2 fas fa-greater-than"></i>
        </Button>
      </Link>
    </div>
  );
}

export default LandingTitle;
