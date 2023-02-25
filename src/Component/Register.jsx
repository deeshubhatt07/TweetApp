import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Login.css';

const Register = () => {
  const [userDetail, setUserDetail] = useState({
    username: '',
    contact: '',
    email: '',
    password: '',
    confPassword: '',
  })
  const updateVal = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserDetail((prev) => (
      {
        ...prev,
        [name]: value
      }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    updateVal();
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
        <Form.Group controlId="formPlaintextPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={userDetail.username}
            onChange={e => updateVal(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={userDetail.email}
            onChange={e => updateVal(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPlaintextPassword">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={userDetail.email}
            onChange={e => updateVal(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={userDetail.password}
            onChange={e => updateVal(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={userDetail.confPassword}
            onChange={e => updateVal(e.target.value)}
          />
        </Form.Group>

        <Button className ='mt-3' variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;