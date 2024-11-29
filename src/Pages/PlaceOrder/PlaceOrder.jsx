import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const PlaceOrder = () => {
  const { getTotalCartAmount, orderData, setOrderData, vnd } = useContext(StoreContext)
  const navigate = useNavigate()
  const [valid, setValid] = useState('none')
  const onChangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOrderData(data => ({ ...data, [name]: value }))
  }
  const submitOrder = () => {
    if (orderData.first_name === '' ||
      orderData.last_name == '' ||
      orderData.email === '' ||
      orderData.street === '' ||
      orderData.city === '' ||
      orderData.ward === '' ||
      orderData.district === '' ||
      orderData.phone === '') {

        setValid('flex')

    } else {
      setValid(true)
      navigate('/web-food-FE/payment')
    }
  }
  return (
    <form className='place-order' onSubmit={submitOrder}>
      <div className="place-order-left">
        <p className="title">Thông tin giao hàng</p>
        <p style={{display: valid, color: 'red'}}>Vui lòng nhập đầy đủ thông tin!</p>
        <div className="multi-fields">
          <input type="text" required onChange={onChangeHandle} name='first_name' value={orderData.first_name} placeholder='Tên' />
          <input type="text" required onChange={onChangeHandle} name='last_name' value={orderData.last_name} placeholder='Họ' />
        </div>
        <input type="email" required onChange={onChangeHandle} name='email' value={orderData.email} placeholder='Email' />
        <input type="text" required onChange={onChangeHandle} name='street' value={orderData.street} placeholder='Số nhà, tên đường' />
        <div className="multi-fields">
          <input type="text"  required onChange={onChangeHandle} name='ward' value={orderData.state} placeholder='Phường/Xã' />
          <input type="text" required onChange={onChangeHandle} name='district' value={orderData.state} placeholder='Quận/Huyện' />
          <input type="text" required onChange={onChangeHandle} name='city' value={orderData.city} placeholder='Tỉnh/TP' />
        </div>
        <input type="Number" required onChange={onChangeHandle} name='phone' value={orderData.phone} placeholder='SDT' />
        <div className="multi-fields">
          {/* <input type="Number" onChange={onChangeHandle} name='zip_code' value={orderData.zip_code} placeholder='Zip code' /> */}
          {/* <input type="text" onChange={onChangeHandle} name='country' value={orderData.country} placeholder='Quốc gia' /> */}
        </div>
        {/* <input type="Number" onChange={onChangeHandle} name='phone' value={orderData.phone}  placeholder='Phone' /> */}
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Tổng đơn</h2>
          <div>
            <div className="cart-total-detail">
              <p>Tổng</p>
              <p>{vnd.format(getTotalCartAmount())}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Phí vận chuyển</p>
              <p>{vnd.format(getTotalCartAmount() === 0 ? 0 : 2000)}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Tổng thanh toán</p>
              <p>{vnd.format(getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2000)}</p>
            </div>
          </div>
          <button type='submit'>Xác nhận đơn hàng</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
