import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ResetForm from "../ResetForm";
import { resetPassword } from "../../api/api.js";

const ForgotPasswordForm = () => {
  const [reseted, setReset] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setIsValidEmail(emailRegex.test(email));
  };
  const handleReset = async (e) => {
    e.preventDefault();
    setReset(true);
    try {
      await resetPassword(email);
      console.log("Password reset request submitted successfully.");
    } catch (error) {
      console.error("Password reset failed:", error.message);
    }
  };
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      {reseted ? (
        <ResetForm />
      ) : (
        <Form className="form">
          <h1 className="heading my-4 text-center">Forgot Password ?</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
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
          <Button variant="primary w-100 font-button" onClick={handleReset}>
            Send
          </Button>{" "}
          <Button
            variant="primary w-100 font-button btn-transparent text-dark my-3"
            onClick={goBack}
          >
            Cancel
          </Button>{" "}
        </Form>
      )}
    </>
  );
};

export default ForgotPasswordForm;
