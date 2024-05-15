import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    sessionStorage.setItem('openSidebar', false);
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />

          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/register" element={<RegisterPage />}></Route> */}
        </Routes>
        <div></div>
      </Router>
    </div>
  );
}

export default App;