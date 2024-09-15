import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'

const routerProvider = createBrowserRouter([
  {
      path: '/',
      element: <App/>,
      children: [
          {
              path: '/about',
              element: <About/>
          }
      ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={routerProvider}/>
  </StrictMode>,
)
