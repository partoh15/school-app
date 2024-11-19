import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  "../src/components/signup.js"; // Adjust the path if necessary
import "../src/components/signup.css"; 


  const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/signup" element={<signup />} />
          <Route path="*" element={<signup />} />
        </Routes>
      </Router>
    );
  };

export default App;
