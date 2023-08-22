import "./App.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import React, { useState } from "react";
import ContactUs from "./pages/ContactUs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [mode, setMode] = useState("light");
  const [highOpacity, setHighOpacity] = useState(false);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setHighOpacity(false);
      console.log(highOpacity);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setHighOpacity(true);
      console.log(highOpacity);
    }
  };

  return (
    <>
      <Router>
        <div
          className={`background-overlay ${highOpacity ? "high-opacity" : ""}`}
        />
        <Navbar title="" mode={mode} toggleMode={toggleMode} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/FAQ" element={<FAQ faq="Blog" mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <Home
                  mode={mode}
                />
              }
            />
            <Route
              exact
              path="/contactus"
              element={<ContactUs mode={mode} />}
            />
            <Route
              path="*"
              element={
                <PageNotFound />
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
