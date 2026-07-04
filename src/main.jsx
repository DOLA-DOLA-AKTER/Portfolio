import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom"
import { Home } from './Pages/Home.jsx';
import { About } from './Pages/About.jsx';
import { Skills } from './Pages/Skills.jsx';
import { Projects } from './Pages/Projects.jsx';
import { Contact } from './Pages/Contact.jsx';
import { RootLayOut } from './RootLayOut/RootLayOut.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "skills", Component: Skills },
      { path: "projects", Component: Projects },
      { path: "contact", Component: Contact },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
)
