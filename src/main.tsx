import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Index from './pages/Index.tsx'


const router = createBrowserRouter([{
  path: '/',
  element: <Index />,
  errorElement: <ErrorPage />
},
{
  path: '/index',
  element: <App />
}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
