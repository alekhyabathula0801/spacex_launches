import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./screens/Dashboard";
import PageNotFound from "./components/PageNotFound";
import Login from "./screens/Login";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/login"} element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
