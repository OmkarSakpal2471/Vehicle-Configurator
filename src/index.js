import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Page/Home";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import Contactus from "./Page/Contactus";
import Register from "./Page/Register";
import Aboutus from "./Page/Aboutus";
import DefaultConfig from "./Page/DefaultConfig";
import Welcome from "./Page/Welcome";
import Configure from "./Page/Configure";
import Invoice from "./Page/Invoice";
import Temporary from "./Page/Temporary";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Aboutus" exact element={<Aboutus />}></Route>
        <Route path="/Register" exact element={<Register />}></Route>
        <Route path="/Contactus" exact element={<Contactus />}></Route>
        {/* <Route path ="/feedback" exact element ={<Feedback />}></Route>
         */}
        <Route path="/Welcome" exact element={<Welcome />}></Route>
        <Route path="/LoginPage" exact element={<LoginPage />}></Route>
        <Route
          path="/DefaultConfig/:Model_id"
          exact
          element={<DefaultConfig />}
        ></Route>
        <Route
          path="/Temporary/:Model_id"
          exact
          element={<Temporary />}
        ></Route>
        <Route
          path="/Configure"
          exact
          element={<Configure />}
        ></Route>
        <Route path="/Invoice" exact element={<Invoice />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
