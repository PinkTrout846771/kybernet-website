import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Navbar from './Navbar.jsx'

import './index.css'

const bg = 'bg-amber-50 bg-radial'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className={bg}><Navbar page='home' /><HomePage /></div>,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/home',
    element: <div className={bg}><Navbar page='home' /><HomePage /></div>,
  },
  {
    path: '/team',
    element: <div className={bg}><Navbar page='team' /><TeamPage /></div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
