import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Navbar from './Navbar.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar /><HomePage /></>,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/home',
    element: <><Navbar /><HomePage /></>,
  },
  {
    path: '/team',
    element: <><Navbar /><TeamPage /></>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
