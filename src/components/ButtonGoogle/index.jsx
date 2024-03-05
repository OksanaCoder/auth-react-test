import React from "react";
import { Button } from "react-bootstrap";
import google from "../../assets/images/google.svg";

const ButtonGoogle = () => {
  return (
    <Button variant="light" className="auth-btn p-2">
      <img src={google} alt="google" className="me-2" />
      Google
    </Button>
  );
};

export default ButtonGoogle;
