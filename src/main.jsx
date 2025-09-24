import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About/About.jsx";
import Projets from "./pages/Projets/Projets.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const router = createBrowserRouter(
  [
    {
      element: (
        <>
          <ScrollToTop />
          <Outlet />
        </>
      ),
      children: [
        { path: "/", element: <App /> },
        { path: "/about", element: <About /> },
        { path: "/projets", element: <Projets /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ],
  {
    basename: "/portfolio",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
