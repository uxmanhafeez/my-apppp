import React, { useState } from "react";

import "./App.css";
import Navbar from "./componenets/Navbar";
import TextForm from "./componenets/TextForm";
import Alert from "./componenets/Alert";
// import About from "./componenets/About";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b3249";
      showAlert("This is a Night Mode", "success");
      document.title = "Text-Utiles - Dark Mode";
      // setTimeout(() => {

      //   document.title = 'Download Please.'
      // }, 2000);
      // setInterval(() => {

      //   document.title = 'Download Light Mode.'
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("This is a Light Mode", "success");
      document.title = "Text-Utiles - Light Mode.";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtiles"
          namee="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={
              {/*               
                </Route>
              </Routes> */}
              <TextForm 
                heading="Enter Your Text to Analyze :  " mode={mode} showAlert={showAlert}
              />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
