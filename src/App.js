//import About from "./component/about";
import Alert from "./component/Alert";
import Navbar from "./component/navbar";
import Textform from "./component/textform";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#150A39";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title="Utills" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      {/* <Routes> */}
      {/* <Route path="/about" element={<About />} />
          <Route
            path="/" */}
      <Textform mode={mode} alert={showAlert} />
      {/* /> */}
      {/* </Routes> */}
      <div className="container"></div>
      {/* </Router> */}
    </>
  );
}

export default App;
