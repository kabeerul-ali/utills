//import About from "./component/about";
import Alert from "./component/Alert";
import Navbar from "./component/navbar";
import Textform from "./component/textform";
import React, { useState } from "react";
function App() {
  const [mode, setmode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#150A39";
      showalert("dark mode is enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode is enable", "success");
    }
  };
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  return (
    <>
      <Navbar title="Utills" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container ">
        <Textform mode={mode} alert={showalert} />
      </div>
    </>
  );
}

export default App;
