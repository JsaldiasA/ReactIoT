import { StrictMode } from 'react'
import './index.css'
import Devices from './Devices.tsx'
import Nav1 from './nav1.tsx'
import Home from './Home.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import { Login } from './Login.tsx'
import { createRoot } from "react-dom/client";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/Devices",
        element: <Devices />
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <Nav1 />
        <RouterProvider router={router} />
  </StrictMode>,
)
