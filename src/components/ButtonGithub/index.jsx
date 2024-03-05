import React from "react";
import { Button } from "react-bootstrap";
import github from "../../assets/images/github.svg";

const ButtonGithub = () => {
  return (
    <Button variant="light" className="auth-btn p-2">
      <img src={github} alt="google" className="me-2" />
      Github
    </Button>
  );
};

export default ButtonGithub;
