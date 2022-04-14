import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, ServiciiPage, ContactPage, ServiciuPage } from "./pages";

const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/servicii",
    component: <ServiciiPage />,
  },
  {
    path: "/servicii/:name",
    component: <ServiciuPage />,
  },
  {
    path: "/contact",
    component: <ContactPage />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
