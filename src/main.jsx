import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import { Cart } from './pages/Cart.jsx'

const routerProvider = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: 'product-details/:id',
        element: <Product/>
      },
      {
        path: 'cart',
        element: <Cart/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerProvider} />
  </StrictMode>,
)
