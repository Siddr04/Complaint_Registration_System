import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Start from "./pages/Start";
import About from "./pages/About";
function App() {
  return (
  <div className="App">
    <Router>
    
    <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/getStarted" element={<Start />} exact />
            <Route path="/aboutUs" element={<About />} exact />
            
          </Routes>
    </Router>
    </div>
  );
}

export default App;
