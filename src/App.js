import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import LaunchesList from "./components/LaunchesList";
import { fetchLaunches } from "./dataLayer/features/launches/launchesAction";
import { getLaunchesFilterData } from "./dataLayer/features/launches/launchesSelector";

function App() {
  const dispatch = useDispatch();
  const filterData = useSelector(getLaunchesFilterData, shallowEqual);

  useEffect(() => {
    dispatch(fetchLaunches({ params: filterData }));
  }, [dispatch, filterData]);

  return (
    <div className="App">
      <AppBar />
      <LaunchesList />
    </div>
  );
}

export default App;
