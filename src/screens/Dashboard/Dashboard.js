import { isEmpty } from "lodash-es";
import React, { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppBar from "../../components/AppBar";
import LaunchesList from "../../components/LaunchesList";
import { getUserData } from "../../dataLayer/features/login/loginSelector";

const Dashboard = () => {
  const { userId } = useSelector(getUserData, shallowEqual);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEmpty(userId)) {
      navigate("/login");
    }
  }, [userId, navigate]);

  return (
    <div>
      <AppBar />
      <LaunchesList />
    </div>
  );
};

export default Dashboard;
