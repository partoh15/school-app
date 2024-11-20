import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../src/components/signup"; // Adjust the path if necessary
import "../src/components/signup.css"; // Ensure the path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
