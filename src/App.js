/** @format */

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { useEffect } from "react";
import { LoginPage } from "./Pages";
import { path } from "./utils/Constant";
import { Toaster } from "sonner";

function App() {
  useEffect(() => {
    sessionStorage.setItem("openSidebar", false);
  }, []); // Adding an empty dependency array to ensure it runs only once

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />
          <Route path={path.LOGIN} element={<LoginPage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
        </Routes>
      </Router>
      <Toaster richColors />
    </div>
  );
}

export default App;
