import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Heading from "./component/Heading/Heading";
import Home from "./component/Home/Home";
import logoImg from "./assets/image/imgi_1_avataaars.svg";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
import NotFound from "./component/NotFound/NotFound";
import Layout from "./component/Layout/Layout";

function App() {
  const MyRoute = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/porfolio", element: <Portfolio /> },
        { path: "/contct", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={MyRoute} />
    </>
  );
}

export default App;
