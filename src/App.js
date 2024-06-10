import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
