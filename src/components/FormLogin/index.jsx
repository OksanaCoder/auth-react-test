import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ButtonGoogle from "../ButtonGoogle";
import ButtonGithub from "../ButtonGithub";
import ForgotPasswordForm from "../ForgotPasswordForm";
import "./style.css";
import { loginApiCall } from "../../api/api.js";

const FormLogin = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setIsValidEmail(emailRegex.test(email));
  };
  const handleForgot = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(password.length >= 8);
  };

  const handleSubmit = async () => {
    try {
      await loginApiCall(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
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
              <Form.Control
                type="email"
                placeholder="Work email"
                onChange={handleChange}
                value={email}
                onBlur={handleBlur}
                required
              />
              {!isValidEmail && (
                <p
                  className="small-text my-2 align-right"
                  style={{ color: "red" }}
                >
                  Invalid email address
                </p>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3 align-right"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChangePassword}
                value={password}
                required
              />
              {!isValidPassword && (
                <p
                  className="small-text my-2 align-right"
                  style={{ color: "red" }}
                >
                  Password should be at least 8 characters long
                </p>
              )}

              <a
                onClick={handleForgot}
                className="primary-color small-text text-decoration-none"
              >
                Forgot password ?
              </a>
            </Form.Group>
            <Button variant="primary w-100 font-button" onClick={handleSubmit}>
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
