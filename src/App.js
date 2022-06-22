import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import styles from "../src/styles/app.module.scss";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
