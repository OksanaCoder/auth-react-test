import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ResetForm from "../ResetForm";

const ForgotPasswordForm = () => {
  const [reseted, setReset] = useState(false);
  const handleReset = (e) => {
    e.preventDefault();
    setReset(true);
  };
  return (
    <>
      {reseted ? (
        <ResetForm />
      ) : (
        <Form className="form">
          <h1 className="heading my-4 text-center">Forgot Password ?</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Button variant="primary w-100 font-button" onClick={handleReset}>
            Send
          </Button>{" "}
          <Button variant="primary w-100 font-button btn-transparent text-dark my-3">
            Cancel
          </Button>{" "}
        </Form>
      )}
    </>
  );
};

export default ForgotPasswordForm;
