import React, { useContext, useState } from 'react'
import './Payment.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets-local/assets'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Payment = () => {
    const { food_list, cartItem, url, getTotalCartAmount, } = useContext(StoreContext)
    const [payUrl, setPayUrl] = useState('')
    const handleOnChange = async (e) => {
        const paymentType = e.target.value
        if (paymentType==='momo') {
            const result = await axios.post(url+'/payment',{})
            setPayUrl(result.data.payUrl)
            console.log(result);
            
        }
    }
    const handleSubmit = () => {

    }
    return (
        <div className='payment'>
            <div className="order-col flex-col">
                {food_list.map((item, index) => {
                    if (cartItem[item._id] > 0) {
                        return (
                            <div key={index} className='cart-item-row'>
                                <img src={url + '/images/' + item.image} alt='' />
                                <p>{item.name}</p>
                                <div className="flex-col">
                                    <p className='cart-item-info'>Price: {item.price}</p>
                                    <p className='cart-item-info'>Quantity: {cartItem[item._id]}</p>
                                    <p className='cart-item-info'>Total: {item.price * cartItem[item._id]}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="payment-col flex-col">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-detail">
                            <p>Subtotal</p>
                            <p>$ {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-detail">
                            <p>Delivery Free</p>
                            <p>$ {getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-detail">
                            <p>Total</p>
                            <p>$ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
                        </div>
                    </div>
                </div>
                <div className="start-payment">
                    <form className='form-pay-method'>
                        <h2>Payment method</h2>
                        <select onChange={handleOnChange} name='method'>
                            <option value='momo'>Momo</option>
                            <option value='zalopay'>ZaloPay</option>
                            <option value='vnpay'>VNPay</option>
                            <option value='bank'>bank</option>
                        </select>
                    </form>
                    <button className='btn-pay'><Link to={payUrl}>Payment</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Payment
