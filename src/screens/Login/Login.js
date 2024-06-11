import { Button, Stack, TextField } from "@mui/material";
import { cloneDeep, isEmpty } from "lodash-es";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../dataLayer/features/login/loginAction";
import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    userIdError: "",
    password: "",
    passwordError: "",
  });

  const onChange = (name) => (event) => {
    const value = event.target.value;
    setFormData((data) => {
      return {
        ...data,
        [name]: value,
        [`${name}Error`]: "",
      };
    });
  };

  const onLogin = () => {
    let isValidLogin = true;
    let form = cloneDeep(formData);
    if (isEmpty(formData.userId)) {
      isValidLogin = false;
      form.userIdError = "Please enter user id";
    }
    if (isEmpty(formData.password)) {
      isValidLogin = false;
      form.passwordError = "Please enter password";
    }
    if (isValidLogin) {
      dispatch(setUserData(formData));
      navigate("/");
    } else {
      setFormData(form);
    }
  };

  return (
    <Stack className="sxl-login" alignItems={"center"} justifyContent="center">
      <Stack
        alignItems={"center"}
        justifyContent="center"
        gap="16px"
        className="sxl-l-wrapper"
      >
        <TextField
          fullWidth
          label="User Id"
          value={formData.userId}
          onChange={onChange("userId")}
          helperText={formData.userIdError}
          error={!isEmpty(formData.userIdError)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={formData.password}
          onChange={onChange("password")}
          helperText={formData.passwordError}
          error={!isEmpty(formData.passwordError)}
        />
        <Button
          className="sxl-lw-button"
          fullWidth
          color="secondary"
          variant="outlined"
          onClick={onLogin}
        >
          Login
        </Button>
      </Stack>
    </Stack>
  );
};

export default Login;
