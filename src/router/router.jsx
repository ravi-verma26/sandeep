import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
export default function AppRoutes() {
  const routes = [
    {
      name: "Home",
      path: "/",
      Component: Home,
    },   
    {
      name: "about",
      path: "/about",
      Component: About,
    },
    {
      name: "Services",
      path: "/services",
      Component: Services,
    },
    {
      name: "Contact",
      path: "/contact-us",
      Component: Contact,
    },    
  ];

  // ROUTES MAPING
  const Routing = routes.map(({ name, path, Component }, i) => (
    <Route key={i} path={path} element={<Component />} />
  ));

  return (
    <div>
      <Routes>{Routing}</Routes>
    </div>
  );
}