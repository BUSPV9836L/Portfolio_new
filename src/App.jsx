import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import MyWorkDetails from "./Container/MyWorkDetails";
import Layout from "./Components/Layout";
import Article from "./Container/Article";

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

  const LandingPage = () => {
    return (
      <>
        <Hero />
        <About />
        <MyWork />
        <Contact showAlert={showAlert} />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout handelClear={handelClear} message={message} type={type} />
      ),
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "MyWork",
          element: <MyWorkDetails />,
        },
        // {
        //   path: "Article",
        //   element: <Article />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
