import React, { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../../context/StoreContext'
const Order = () => {
    const { url } = useContext(StoreContext)
    const order_list = [
        {
            date: 'test1',
            status: 'Success',
            cartData: [
                {
                    image: '',
                    name: 'salads finsh',
                    price: 2,
                    quantity: 2,
                },
                {
                    image: '',
                    name: 'salads finsh',
                    price: 2,
                    quantity: 2,
                }
            ]
        },
        {
            date: 'test2',
            status: 'Success',
            cartData: [
                {
                    image: '',
                    name: 'salads finsh',
                    price: 2,
                    quantity: 2,
                },
                {
                    image: '',
                    name: 'salads finsh',
                    price: 2,
                    quantity: 2,
                }
            ]
        },{
            date: 'test3',
            status: 'Success',
            cartData: [
                {
                    image: '',
                    name: 'salads finsh',
                    price: 2,
                    quantity: 2,
                },
                {
                    image: '',
                    name: 'salads finsh',
                    price: 2,
                    quantity: 2,
                }
            ]
        }
    ]
    return (
        <div className='orders'>
            <div className="order">
                <div className="order-title">
                    <p>Date order</p>
                    <p>Status</p>
                </div>
                <hr />
                <br />
                {order_list.map((order, index) => {
                    if (order_list.length > 0) {
                        return (
                            <>
                                <div className='order-item-title order-items-item' key={index}>
                                    <p className='order-date'>{order.date}</p>
                                    <p order>{order.status}</p>
                                </div>
                                {order.cartData.map((item, index) => {
                                    return(
                                        <div className='order-item-title order-items-item' key={index}>
                                            <img src={url + '/images/' + item.image} />
                                            <div className='order-item-info'>
                                                <p>{item.name}</p>
                                                <p>Price{item.price}</p>
                                                <p>X{item.quantity}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>

                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Order;
