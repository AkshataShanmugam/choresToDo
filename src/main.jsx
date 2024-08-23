import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './styles/index.css'
import TaskTracker from "./TaskTracker.jsx"
import ErrorPage from "./ErrorPage.jsx";
import AddTask from './Components/AddTask.jsx'

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
    path: "add",
    element: <AddTask />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
