import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
