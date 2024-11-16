import React, { useContext, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
// import Order from './Pages/Order/order'
import Payment from './Pages/Payment/Payment'
import { StoreContext } from './context/StoreContext'
const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const {token} = useContext(StoreContext)
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={token ? <Cart /> : <h1>You are not logged in</h1>} />
          <Route path='/place' element={token ? <PlaceOrder /> : <h1>You are not logged in</h1>} />
          <Route path='/order' element={token ? <PlaceOrder /> : <h1>You are not logged in</h1>}/>
          <Route path='/payment' element={token ? <Payment/> : <h1>You are not logged in</h1>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
