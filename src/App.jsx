import React from 'react'
import Layout from './Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Error from './pages/Error'
import ProductDetails from './pages/ProductDetails'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/index.scss'
import '../node_modules/font-awesome/css/font-awesome.min.css';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/productDetails/:productId' element={<ProductDetails />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
)



function App() {
  
  return (
    <RouterProvider router={Router} />
  )
}

export default App
