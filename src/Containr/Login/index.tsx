import React from "react";
import "./main.scss";
import { TextField, AppBar, Typography, Toolbar } from "@material-ui/core";
import { Button, Row } from "react-bootstrap";
import axios from "axios";
const Login = () => {
  const [userEmail, setUserEmail] = React.useState("");
  const updateUserEmail = (event: any) => {
    setUserEmail(event.target.value);
  };

  const [userPassword, setUserPassword] = React.useState("");
  const updateUserPassword = (event: any) => {
    setUserPassword(event.target.value);
  };

  const handleClick = () => {
    axios
      .post(
        "http://127.0.0.1:5000/Login ",
        {},
        {
          auth: { username: userEmail, password: userPassword }
        }
      )
      .then(function(response) {
        if (response.status === 200) {
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div className="loginWrapper">
      <Row>
        <AppBar>
          <Toolbar>
            <Typography variant="h4">Login </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <TextField
          id="standard-basic"
          label="Email id"
          onChange={event => updateUserEmail(event)}
        />
      </Row>
      <br />
      <Row>
        <TextField
          id="standard-basic"
          label="Password"
          onChange={event => updateUserPassword(event)}
        />
      </Row>
      <br />
      <span>
        <Button size="lg" color="primary" onClick={() => handleClick()}>
          Submit
        </Button>
      </span>
    </div>
  );
};
export default Login;
