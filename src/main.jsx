import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Gameone from './Gameone/Gameone';
import OnePlayer from './Screenone/OnePlayer';
import TwoPlayer from './Screenone/TwoPlayer';
import Team from './Screenone/Team';
import TaskFailed from './TaskFailed/TaskFailed';
import TaskFailedTwo from './TaskFailed/TaskFailedTwo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/game",
    element: <Gameone />,
  },
  {
    path: "/oneplayer",
    element: <OnePlayer />,
  },
  {
    path: "/twoplayer",
    element: <TwoPlayer />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/taskfailed",
    element: <TaskFailed />,
  },
  {
    path: "/taskfailedtwo",
    element: <TaskFailedTwo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
