import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#063274";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      //Tilte e blink kore user er eye interact korar jonno ei code use kora hoi
      // setInterval(() => {
      //   document.title = "TextUtils is awosome";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "One Message";
      // }, 1500);

    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter Your text to analyze below" mode={mode} toggleMode={toggleMode} />
        
        {/* <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your text to analyze below" mode={mode} toggleMode={toggleMode} />} />
          <Route exact path="/about" element={<About />} />
          
        </Routes> */}
      </div>
      {/* </BrowserRouter> */}
      
    </>
  );
}

export default App;
