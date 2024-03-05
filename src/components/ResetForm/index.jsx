import React from "react";
import { Form, Button } from "react-bootstrap";

const ResetForm = () => {
  return (
    <Form className="form form-login">
      <h1 className="heading my-4 text-center">Create new Password ?</h1>
      <Form.Group className="mb-3" controlId="formPlaintextPassword1">
        <Form.Label className="form-label">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formPlaintextPassword">
        <Form.Label className="form-label">Confirm Password</Form.Label>{" "}
        <Form.Control type="password" placeholder="Passsword" />
      </Form.Group>
      <Button variant="primary w-100 font-button my-4">Reset Password</Button>{" "}
    </Form>
  );
};

export default ResetForm;
