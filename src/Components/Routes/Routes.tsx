import { Routes, Route } from "react-router-dom";
import Signin from "../Pages/Signin/Signin";
import CreatePage from "../Pages/Create/CreatePage";

const Routes_ = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreatePage />}></Route>
        <Route path="/home" element={<CreatePage />}></Route>
      </Routes>
    </>
  );
};

export default Routes_;
