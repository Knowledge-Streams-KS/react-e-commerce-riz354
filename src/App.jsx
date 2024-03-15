import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Products from './Pages/Product'
import Header from './components/Header'
import About from './Pages/About'
import Home from './Pages/Home'
import Layout from './components/layout'
import Contact from './Pages/Contact'

import ProductDetail from './Pages/ProductDetail'

// import { productDetailLoader } from './Pages/ProductDetail'
import Page404 from './components/Page404'
import Card from './Pages/Card/card'
import PrivateRoutes from './Routes/PrivateRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Products /> */}

     
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='' element={<Home />} />
          <Route path='products/:categoryName?' element={<Products />} />
          
          <Route path='product-Detail/:productId' element={<ProductDetail/>} />
     
          <Route path='about' element={<About />} />

          <Route path='card' element={
            <PrivateRoutes>
            <Card/>
          </PrivateRoutes>
          }>
            
          </Route>

          <Route path='contact/:contactid' element={<Contact />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
     

      {/* through outlet */}
      {/* <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes> */}

    </>
  )
}

export default App





// check