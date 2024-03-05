import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ButtonGoogle from "../ButtonGoogle";
import ButtonGithub from "../ButtonGithub";
import ForgotPasswordForm from "../ForgotPasswordForm";
import "./style.css";

const FormLogin = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const handleForgot = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
  };
  return (
    <>
      {showForgotPassword ? (
        <ForgotPasswordForm />
      ) : (
        <>
          <Form className="form form-login">
            <h1 className="heading my-4 text-center">Log in to your account</h1>
            <div className="flex-style my-4">
              <ButtonGoogle />
              <ButtonGithub />
            </div>
            <p className="line-style text-center">OR</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Work email" />
            </Form.Group>
            <Form.Group
              className="mb-3 align-right"
              controlId="formBasicPassword"
            >
              <Form.Control type="password" placeholder="Password" />

              <a
                onClick={handleForgot}
                className="primary-color small-text text-decoration-none"
              >
                Forgot password ?
              </a>
            </Form.Group>
            <Button variant="primary w-100 font-button">
              Log in to Qencode
            </Button>{" "}
          </Form>
          <p className="mt-3 small-text">
            Is your company new to Qencode?{" "}
            <small className="primary-color">Sign up</small>
          </p>
        </>
      )}
    </>
  );
};

export default FormLogin;
