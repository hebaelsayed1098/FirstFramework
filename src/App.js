import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Notfound from "./Components/NotFound/Notfound";

export default function App() {
  let routers = createBrowserRouter([
    { path:'', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "portofolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Notfound /> },
    ]},
  ]);
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
