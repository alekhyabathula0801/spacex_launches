import { Button, Stack, TextField } from "@mui/material";
import { cloneDeep, isEmpty } from "lodash-es";
import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../dataLayer/features/login/loginAction";
import { updateUsersList } from "../../dataLayer/features/users/usersAction";
import { getUsersList } from "../../dataLayer/features/users/usersSelector";
import "./signUp.scss";

const SignUp = () => {
  const dispatch = useDispatch();
  const usersList = useSelector(getUsersList, shallowEqual);
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

  const validateUser = () => {
    let isValidLogin = true;
    let form = cloneDeep(formData);

    if (isEmpty(formData.password)) {
      isValidLogin = false;
      form.passwordError = "Please enter password";
    } else if (formData.password.length <= 7) {
      isValidLogin = false;
      form.passwordError = "Password must contain 7 characters";
    }
    const userData = usersList.find((data) => data.userId === formData.userId);
    if (isEmpty(formData.userId)) {
      isValidLogin = false;
      form.userIdError = "Please enter user id";
    } else if (!isEmpty(userData)) {
      isValidLogin = false;
      form.userIdError = "User Id already exists";
    } else if (formData.userId.length <= 5) {
      isValidLogin = false;
      form.userIdError = "User Id must contain 5 characters";
    }

    if (!isValidLogin) {
      setFormData(form);
    }

    return isValidLogin
  }

  const onSignUp = () => {
    const isValidLogin = validateUser();
    if (isValidLogin) {
      dispatch(updateUsersList(formData));
      dispatch(setUserData(formData));
      navigate("/");
    }
  };

  const onLogin = () => {
    navigate("/login");
  };

  return (
    <Stack
      className="sxl-sign-up"
      alignItems={"center"}
      justifyContent="center"
    >
      <Stack
        alignItems={"center"}
        justifyContent="center"
        gap="16px"
        className="sxl-su-wrapper"
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
          className="sxl-suw-button sxl-suw-primary-button"
          fullWidth
          color="secondary"
          variant="contained"
          onClick={onSignUp}
        >
          SIGN UP
        </Button>
        <Button
          className="sxl-suw-button"
          fullWidth
          color="secondary"
          variant="outlined"
          onClick={onLogin}
        >
          LOGIN
        </Button>
      </Stack>
    </Stack>
  );
};

export default SignUp;
