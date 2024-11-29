import React, { useContext, useState } from 'react'
import './Payment.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Payment = () => {
    const { food_list, cartItem, url, getTotalCartAmount,vnd } = useContext(StoreContext)
    const [payUrl, setPayUrl] = useState('')
    const handleOnChange = async (e) => {
        const paymentType = e.target.value
        if (paymentType==='momo') {
            // const result = await axios.post(url+'/payment',{})
            // setPayUrl(result.data.payUrl)
            setPayUrl('https://test-payment.momo.vn/v2/gateway/pay?s=b8357eb66ce62fa0eb998a595bb6c5e3c2f251acad65aae2aaf2e7ffdeba8f79&t=TU9NT3xNT01PMTczMjkwNTkyNjg2Mw')
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
                                {/* <img src={url + '/images/' + item.image} alt='' /> */}
                                <img src={item.image} alt='' />
                                <p>{item.name}</p>
                                <div className="flex-col">
                                    <p className='cart-item-info'>Giá: {vnd.format(item.price)}</p>
                                    <p className='cart-item-info'>Số lượng: {cartItem[item._id]}</p>
                                    <p className='cart-item-info'>Tổng: {vnd.format(item.price * cartItem[item._id])}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="payment-col flex-col">
                <div className="cart-total">
                    <h2>Tổng đơn hàng</h2>
                    <div>
                        <div className="cart-total-detail">
                            <p>Tổng</p>
                            <p> {vnd.format(getTotalCartAmount())}</p>
                        </div>
                        <hr />
                        <div className="cart-total-detail">
                            <p>Phí vận chuyển</p>
                            <p> {vnd.format(getTotalCartAmount() === 0 ? 0 : 2000)}</p>
                        </div>
                        <hr />
                        <div className="cart-total-detail">
                            <p>Tổng thanh toán</p>
                            <p>{vnd.format(getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2000)}</p>
                        </div>
                    </div>
                </div>
                <div className="start-payment">
                    <form className='form-pay-method'>
                        <h2>Phương thức thanh toán</h2>
                        <select onChange={handleOnChange} name='method'>
                            <option value='momo'>Momo</option>
                            <option value='zalopay'>ZaloPay</option>
                            <option value='vnpay'>VNPay</option>
                            <option value='bank'>bank</option>
                        </select>
                    </form>
                    <button className='btn-pay'><Link to={payUrl}>Thanh toán</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Payment
