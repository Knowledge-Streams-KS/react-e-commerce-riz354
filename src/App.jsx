import { Outlet, Route, Routes, createRoutesFromElements } from 'react-router-dom'
import { useState } from 'react'
import Products from './Pages/Product'
import Header from './components/Header'
import About from './Pages/About'
import Home from './Pages/Home'
import Layout from './components/Layout/layout'
import Contact from './Pages/Contact'
import ProductDetail from './Pages/ProductDetail'
import { productDetailLoader } from './Pages/ProductDetail'
import Page404 from './components/Page404'
import Card from './Pages/Card/card'
import PrivateRoutes from './Routes/PrivateRoutes'
import AdminLayout from './components/Layout/adminLayout'
import Login from './Pages/Login/login'
import SignUp from './Pages/SignUp/SignUp'

const App = createRoutesFromElements(
  <>
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='products/:categoryName?' element={<Products />} />
      <Route path='product-Detail/:productId' element={<ProductDetail />} loader={productDetailLoader} />
      <Route path='about' element={<About />} />
      <Route path='card' element={
        <PrivateRoutes>
          <Card />
        </PrivateRoutes>
      }>

      </Route>

      <Route path='contact/:contactid' element={
        <AdminLayout>
          <Contact />
        </AdminLayout>
      } />
      <Route path='/user' element={
        <AdminLayout>
          <About />
         <Outlet />
        </AdminLayout>
        
      }>
      <Route path='/user/login' element={<Login />} />
      <Route path='/user/signup' element={<SignUp />} />
     
       
      </Route>
    </Route>
    <Route path='*' element={<Page404 />} />
  </>)
// sdjcj d
export default App





// check