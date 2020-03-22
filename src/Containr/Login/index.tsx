import React from "react";
import "./main.scss";
import { TextField, AppBar, Typography, Toolbar } from "@material-ui/core";
import { Button, Row } from "react-bootstrap";
const Login = () => {
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
        <TextField id="standard-basic" label="Email id" />
      </Row>
      <br />
      <Row>
        <TextField id="standard-basic" label="Password" />
      </Row>
      <br />
      <span>
        <Button size="lg" color="primary">
          Submit
        </Button>
      </span>
    </div>
  );
};
export default Login;
