import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const PlaceOrder = () => {
  const {getTotalCartAmount, orderData,setOrderData} = useContext(StoreContext)
  const navigate = useNavigate()
  const onChangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOrderData(data => ({...data, [name]: value}))
 }
  const submitOrder = () => {
    navigate('/payment')
  }
  return (
    <form className='place-order' onSubmit={submitOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Infomation</p>
        <div className="multi-fields">
          <input type="text" onChange={onChangeHandle} name='first_name' value={orderData.first_name} placeholder='First name' />
          <input type="text" onChange={onChangeHandle} name='last_name' value={orderData.last_name} placeholder='Last name' />
        </div>
        <input type="email" onChange={onChangeHandle} name='email' value={orderData.email} placeholder='Email address' />
        <input type="text" onChange={onChangeHandle} name='street' value={orderData.street} placeholder='Street' />
        <div className="multi-fields">
          <input type="text" onChange={onChangeHandle} name='city' value={orderData.city} placeholder='City' />
          <input type="text" onChange={onChangeHandle} name='state' value={orderData.state} placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="Number" onChange={onChangeHandle} name='zip_code' value={orderData.zip_code} placeholder='Zip code' />
          <input type="text" onChange={onChangeHandle} name='country' value={orderData.country} placeholder='Country' />
        </div>
        <input type="Number" onChange={onChangeHandle} name='phone' value={orderData.phone}  placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-detail">
              <p>Delivery Free</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-detail">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button type='submit'>PROCEED TO ORDER</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
