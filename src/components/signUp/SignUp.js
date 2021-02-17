import React, { useCallback } from "react";
import { Form, Button, withRouter } from "react-bootstrap";
import { Link } from "react-router-dom";
import Style from "./SignUp.module.css";
import app from "../../config";
import HomeNav from "../navbar/HomeNav";

function SignUp({ history }) {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <HomeNav />
      <div className={Style.formcontainer}>
        <div className={Style.header}>Sign Up</div>
        <Form onSubmit={handleSignUp}>
          {/* <div className={Style.input}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
        </div> */}
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
            Register
          </Button>
          <div className={Style.signinInfo}>
            <div></div>
            <Link className="link" to="/login">
              <div className={Style.forgotpass}>already have an account ?</div>
            </Link>
          </div>
        </Form>

        <div className={Style.createaccount}>Let's take you on a journey</div>
      </div>
    </div>
  );
}

export default SignUp;
