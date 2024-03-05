import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import hidePass from "../../assets/images/hide.svg";
import showPass from "../../assets/images/showPass.svg";
import "./style.css";

const ResetForm = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  return (
    <Form className="form form-login">
      <h1 className="heading my-4 text-center">Create new Password ?</h1>
      <Form.Group className="mb-3" controlId="formPlaintextPassword1">
        <Form.Label className="form-label">Password</Form.Label>
        <div className="relative-box d-flex">
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-relative"
          />
          <img
            className="status-pass"
            title={showPassword ? "Hide password" : "Show password"}
            src={showPassword ? hidePass : showPass}
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        </div>
      </Form.Group>
      <Form.Group controlId="formPlaintextPassword">
        <Form.Label className="form-label">Confirm Password</Form.Label>{" "}
        <div className="relative-box d-flex">
          <Form.Control
            placeholder="Passsword"
            type={showConfirmedPassword ? "text" : "password"}
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
          <img
            className="status-pass"
            title={showConfirmedPassword ? "Hide password" : "Show password"}
            src={showConfirmedPassword ? hidePass : showPass}
            onClick={() => setShowConfirmedPassword((prevState) => !prevState)}
          />
        </div>
      </Form.Group>
      <Button variant="primary w-100 font-button my-4">Reset Password</Button>{" "}
    </Form>
  );
};

export default ResetForm;
