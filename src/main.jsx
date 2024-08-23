import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './styles/index.css'
import TaskTracker from "./TaskTracker.jsx"
import ErrorPage from "./ErrorPage.jsx";
import Schedule from './Schedule.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskTracker />,
    errorElement: <ErrorPage />,
  }, 
  {
    path: "schedule",
    element: <Schedule />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
