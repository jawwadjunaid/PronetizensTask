import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
//import Footer from './components/Footer';
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
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

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
    <BrowserRouter>
      <Nav title="PRONETIZENS" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        
      <Routes>
        
          <Route exact path="/about" element={<About/>}>
            
          </Route>
          
          <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Enter the text here..!"
                mode={mode}
              />}>
          
          </Route>
          
        </Routes>
        </div>
        </BrowserRouter>
     
    </>
  );
}

export default App;
