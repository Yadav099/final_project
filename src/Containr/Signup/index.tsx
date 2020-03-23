import React from "react";
import "./main.scss";
import { TextField, Toolbar, Typography, AppBar } from "@material-ui/core/";
import { Button, Row } from "react-bootstrap";

import axios from "axios";
const Signup = () => {
  const [userName, setUserName] = React.useState("");
  const updateUserName = (event: any) => {
    setUserName(event.target.value);
  };

  const [userEmail, setUserEmail] = React.useState("");
  const updateUserEmail = (event: any) => {
    setUserEmail(event.target.value);
  };

  const [userId, setUserId] = React.useState("");
  const updateUserId = (event: any) => {
    setUserId(event.target.value);
  };

  const [userPassword, setUserPassword] = React.useState("");
  const updateUserPassword = (event: any) => {
    setUserPassword(event.target.value);
  };

  const handleSubmit = () => {
    axios
      .post("http://127.0.0.1:5000/Signup", {
        username: userName,
        userEmail: userEmail,
        userPassword: userPassword,
        userId: userId
      })
      .then(function(response: any) {
        console.log(response.status);
        if (response.status === 200 && response.data === "Succesfull") {
        }
        console.log(response.data);
      })
      .catch(function(error: any) {
        console.log(error);
      });
  };
  return (
    <div>
      <Row>
        <AppBar>
          <Toolbar>
            <Typography variant="h4">Signup </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <div className="signupWrapper">
        <div className="signupContainer">
          <Row>
            <Typography variant="h4">Login </Typography>
          </Row>
          <br />
          <br />
          <Row>
            <TextField
              id="standard-basic"
              label="User Name"
              onChange={event => updateUserName(event)}
            />
          </Row>
          <br />
          <Row>
            <TextField
              id="standard-basic"
              label="User Id"
              onChange={event => updateUserId(event)}
            />
          </Row>
          <br />
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
          <Row>
            <TextField id="standard-basic" label="Renter Password" />
          </Row>
          <br />
          <span>
            <Button size="lg" color="primary" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </span>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
export default Signup;
