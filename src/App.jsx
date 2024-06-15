import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import CustomAlert from "./Components/Alert";

const App = () => {
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);
  const showAlert = (message, type) => {
    setMessage(message);
    setType(type);
  };
  const handelClear = () => {
    setMessage(null);
    setType(null);
  };
  return (
    <div>
      {message && (
        <CustomAlert handelClear={handelClear} message={message} type={type} />
      )}
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Contact showAlert={showAlert} />
      <Footer />
    </div>
  );
};

export default App;
