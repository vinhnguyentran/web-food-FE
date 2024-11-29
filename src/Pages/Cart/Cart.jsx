import React, { useContext } from 'react'
import './Cart.css';

import { StoreContext } from './../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
const Cart = () => {
  const {cartItem, food_list, removeCartItem, getTotalCartAmount,url,addToCart,deleteCartItem,vnd} = useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className='cart' >
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Hình Ảnh</p>
          <p>Tên món</p>
          <p>Giá</p>
          <p>Số Lượng</p>
          <p>Tổng</p>
          <p>Thêm/bớt</p>
        </div>
        <hr/>
        <br/>
        {food_list.map((item,index) => {
          if(cartItem[item._id]>0){
            return(
              <div className='cart-item-title cart-items-item' key={index}>
                <img src={item.image} alt={item.name}/>
                {/* <img src={url + '/images/' + item.image} alt=''/> */}
                <p>{item.name}</p>
                <p>{vnd.format(item.price)}</p>
                <p>
                  <img className='quantity-icon' src={assets.add_icon_green} onClick={()=> addToCart(item._id)}/>
                  {cartItem[item._id]} 
                  <img  className='quantity-icon' src={assets.remove_icon_red} onClick={() => removeCartItem(item._id)}/></p>
                <p>{vnd.format(item.price*cartItem[item._id])}</p>
                <p onClick={() => deleteCartItem(item._id)} className='cross'><img  src={assets.delete_icon} className='quantity-icon' alt='' /></p>
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          
          <div>
            <div className="cart-total-detail">
              <p>Tổng</p>
              <p> {vnd.format(getTotalCartAmount())}</p>
            </div>
            <hr/>
            <div className="cart-total-detail">
              <p>Phí giao hàng</p>
              <p> {vnd.format(getTotalCartAmount()===0?0:2000)}</p>
            </div>
            <hr/>
            <div className="cart-total-detail">
              <p>Tổng thanh toán</p>
              <p> {vnd.format(getTotalCartAmount()===0?0:getTotalCartAmount()+ 2000)}</p>
            </div>
          </div>
          <button onClick={() => getTotalCartAmount() > 0 ? navigate('/web-food-FE/place') : ''}>THANH TOÁN</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Nếu bạn có mã khuyến mại, hãy nhập vào đây</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='promo code'/>
              <button>OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
