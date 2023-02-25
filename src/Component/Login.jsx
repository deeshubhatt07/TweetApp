import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 
  const handleSubmit = event => {
    event.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
  };

  return (
    <div className="login-box">
      <div className="logoElement">
        <div className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faTwitter} size='2x' color='blue' /></div>
        <div className="d-flex align-items-center justify-content-center">
          <p>Login in to Twitter</p>
        </div>
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="p-2 mt-3">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="p-2 mt-3">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="p-2 mt-3" variant="primary" type="submit">
          Login
        </Button>
        <p className="mt-3">
            Don’t have an account?{" "}
            <Link className="link" to="/register">
              Register now
            </Link>
          </p>
      </Form>
    </div>
  );
};

export default LoginPage;
