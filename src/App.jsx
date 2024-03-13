import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Products from './Pages/Product'
import Header from './components/Header'
import About from './Pages/About'
import Home from './Pages/Home'
import Layout from './components/layout'
import Contact from './Pages/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Products /> */}
      

      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact/:contactid' element={<Contact />} />
        </Route>
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