import React, { useCallback, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Style from "./SignIn.module.css";
import { withRouter, Redirect } from "react-router";
import app from "../../config";
import { AuthContext } from "../../Auth.js";
import HomeNav from "../navbar/HomeNav";

function SignIn({ history }) {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  console.log("user", currentUser);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <HomeNav />
      <div className={Style.formcontainer}>
        <div className={Style.header}>Sign In</div>
        <Form onSubmit={handleLogin}>
          <div className={Style.input}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                label="remember me"
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>
          </div>
          <div className={Style.input}>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
          </div>

          <Button className={Style.submit} type="submit">
            Login
          </Button>
          <div className={Style.signinInfo}>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="remember me" />
            </Form.Group>
            <div className={Style.forgotpass}>forgot password ?</div>
          </div>
        </Form>

        <div className={Style.createaccount}>
          New to Playstix ?{" "}
          <Link className="link" to="/register">
            {" "}
            <span className={Style.signup}>Signup Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
