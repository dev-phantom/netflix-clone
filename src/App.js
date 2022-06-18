import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import styles from "../src/styles/app.module.scss";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/Success" element={<Success/>} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
