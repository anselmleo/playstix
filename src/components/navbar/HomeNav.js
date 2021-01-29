import React, { useContext } from "react";
import Style from "./NavBar.module.css";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth.js";
import app from "../../config";

function HomeNav() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <Navbar className={Style.nav}>
        <Link className="link" to="/">
          <Navbar className={Style.logo}>Playstix</Navbar>
        </Link>
        {!currentUser ? (
          <Link className="link" to="/login">
            <Button className={Style.signinButton}>Sign-in</Button>
          </Link>
        ) : (
          <Link className="link" to="/">
            <Button
              onClick={() => app.auth().signOut()}
              className={Style.signinButton}
            >
              Logout
            </Button>
          </Link>
        )}
      </Navbar>
    </div>
  );
}

export default HomeNav;
