import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import hidePass from "../../assets/images/hide.svg";
import showPass from "../../assets/images/showPass.svg";
import "./style.css";
import { setNewPassword } from "../../api/api.js";

const ResetForm = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(password.length >= 8);
  };
  const handleConfirmedPassword = (e) => {
    setConfirmedPassword(e.target.value);
    setIsValidPassword(confirmedPassword.length >= 8);
  };
  useEffect(() => {
    if (password === confirmedPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [password, confirmedPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordMatch) {
      try {
        await setNewPassword(password, confirmedPassword);
        console.log("Password changed successfully.");
      } catch (error) {
        console.error("Password change failed:", error.message);
      }
    } else {
      console.log("Passwords do not match");
    }
  };

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
            onChange={handlePassword}
            className="form-relative"
          />

          <img
            className="status-pass"
            title={showPassword ? "Hide password" : "Show password"}
            src={showPassword ? hidePass : showPass}
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        </div>
        {!isValidPassword && (
          <p className="small-text my-2 align-right" style={{ color: "red" }}>
            Password should be at least 8 characters long
          </p>
        )}
        {!passwordMatch && (
          <p className="small-text my-2 align-right" style={{ color: "red" }}>
            Passwords do not match !
          </p>
        )}
      </Form.Group>
      <Form.Group controlId="formPlaintextPassword">
        <Form.Label className="form-label">Confirm Password</Form.Label>{" "}
        <div className="relative-box d-flex">
          <Form.Control
            placeholder="Passsword"
            type={showConfirmedPassword ? "text" : "password"}
            onChange={handleConfirmedPassword}
          />

          <img
            className="status-pass"
            title={showConfirmedPassword ? "Hide password" : "Show password"}
            src={showConfirmedPassword ? hidePass : showPass}
            onClick={() => setShowConfirmedPassword((prevState) => !prevState)}
          />
        </div>
        {!isValidPassword && (
          <p className="small-text my-2 align-right" style={{ color: "red" }}>
            Password should be at least 8 characters long
          </p>
        )}
        {!passwordMatch && (
          <p className="small-text my-2 align-right" style={{ color: "red" }}>
            Passwords do not match !
          </p>
        )}
      </Form.Group>
      <Button variant="primary w-100 font-button my-4" onClick={handleSubmit}>
        Reset Password
      </Button>{" "}
    </Form>
  );
};

export default ResetForm;
