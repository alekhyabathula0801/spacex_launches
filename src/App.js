import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import LaunchesList from "./components/LaunchesList";
import { fetchLaunches } from "./dataLayer/features/launches/launchesAction";
import {
  getSelectedFilteredLaunchStatus,
  getSelectedFilteredLaunchYear
} from "./dataLayer/features/launches/launchesSelector";

function App() {
  const dispatch = useDispatch();
  const launchStatus = useSelector(getSelectedFilteredLaunchStatus, shallowEqual);
  const launchYear = useSelector(getSelectedFilteredLaunchYear, shallowEqual);

  useEffect(() => {
    dispatch(fetchLaunches({ params: { launchYear, launchStatus } }));
  }, [dispatch, launchYear, launchStatus]);

  return (
    <div className="App">
      <AppBar />
      <LaunchesList />
    </div>
  );
}

export default App;
