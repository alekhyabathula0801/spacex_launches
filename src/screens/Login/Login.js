import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import './login.scss'
const Login = () => {
  return (
    <Stack className="sxl-login" alignItems={"center"} justifyContent="center">
      <Stack
        alignItems={"center"}
        justifyContent="center"
       
        gap="16px"
        className="sxl-l-wrapper"
      >
        <TextField fullWidth label="User Id" />
        <TextField fullWidth label="Password" type="password" />
        <Button className="sxl-lw-button" fullWidth color="secondary" variant="outlined">
          Login
        </Button>
      </Stack>
    </Stack>
  );
};

export default Login;
