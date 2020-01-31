import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../css/login.css';

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage");
      });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <Form onSubmit={login}>
        <FormGroup>
          <Label for="username" className="label">Email</Label>
          <Input 
            type="text" 
            name="username" 
            id="text" 
            placeholder="Username" 
            value={credentials.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password" className="label">Password</Label>
          <Input 
            type="text" 
            name="password" 
            id="password" 
            placeholder="Password" 
            value={credentials.password}
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="warning">Submit</Button>
      </Form>
    </>
  );
};

export default Login;

{/* <h1>Welcome to the Bubble App!</h1>

 <form onSubmit={login}>
  <input
    type="text"
    name="username"
    value={credentials.username}
    onChange={handleChange}
  /> 
  <input
    type="password"
    name="password"
    value={credentials.password}
    onChange={handleChange}
  />
  <button>Log in</button>
</form> */}