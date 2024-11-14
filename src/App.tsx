import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Routes_ from "./Components/Routes/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Routes_ />
      <ToastContainer />
    </>
  );
}

export default App;
