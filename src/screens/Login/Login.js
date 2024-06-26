import { Button, Stack, TextField } from "@mui/material";
import { cloneDeep, isEmpty } from "lodash-es";
import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../dataLayer/features/login/loginAction";
import { getUsersList } from "../../dataLayer/features/users/usersSelector";
import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersList = useSelector(getUsersList, shallowEqual);

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

  const onSignUp = () => {
    navigate("/sign-up");
  };

  const validateUser = () => {
    let isValidLogin = true;
    let form = cloneDeep(formData);
    const userData = usersList.find((data) => data.userId === formData.userId);
    if (isEmpty(formData.userId)) {
      isValidLogin = false;
      form.userIdError = "Please enter user id";
    } else if (isEmpty(userData)) {
      isValidLogin = false;
      form.userIdError = "User Id doesn't exists, please sign up";
    }
    if (isEmpty(formData.password)) {
      isValidLogin = false;
      form.passwordError = "Please enter password";
    } else if (!isEmpty(userData) && userData.password !== formData.password) {
      isValidLogin = false;
      form.passwordError = "Incorrect password, please try again";
    }

    if (!isValidLogin) {
      setFormData(form);
    }

    return isValidLogin;
  };

  const onLogin = () => {
    const isValidLogin = validateUser();
    if (isValidLogin) {
      dispatch(setUserData(formData));
      navigate("/");
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
          className="sxl-lw-button sxl-lw-primary-button"
          fullWidth
          color="secondary"
          variant="contained"
          onClick={onLogin}
        >
          LOGIN
        </Button>
        <Button
          className="sxl-lw-button"
          fullWidth
          color="secondary"
          variant="outlined"
          onClick={onSignUp}
        >
          SIGN UP
        </Button>
      </Stack>
    </Stack>
  );
};

export default Login;
