import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/layout/layout";
import { LandingPage } from "./pages/landing-page";
import { Project } from "./pages/projects";
import ProjectDetails from "./pages/projects/project-details";
import BlogDetails from "./pages/blog/blog-details";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contact/contact";
import { Experience } from "./pages/experience";
import ExperienceDetail from "./pages/experience/experience-details";
// import AddFeedbackForm from "./pages/feedback/add-feedback";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/projects",
          element: <Project />,
        },
        {
          path: "/experience",
          element: <Experience/>,
        },
        {
          path: "/experience/:id",
          element: <ExperienceDetail/>,
        },
        {
          path: "/contacts",
          element: <Contact />,
        },
        {
          path: "/project/:id",
          element: <ProjectDetails />,
        },
        {
          path: "/blogs",
          element: <Blog />,
        },
        {
          path: "/blog/:id",
          element: <BlogDetails />,
        },
        // {
        //   path: "/add-feedback",
        //   element: <AddFeedbackForm />,
        // },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
