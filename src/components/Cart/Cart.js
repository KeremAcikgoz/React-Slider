import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({ number, DeleteCart, cart, DeleteItem }) => {

    return (
        <>
        <div className='cart'>
            <FontAwesomeIcon style={{fontSize: '40px'}} icon={faShoppingCart} />
            <h2 className='number'>{ number }</h2>
            <button className='deleteCart' onClick={DeleteCart}>
                <FontAwesomeIcon style={{fontSize: '25px'}} icon={faTrash} />
            </button>
        </div>
        {cart.length > 0 ? <ul className='cartList'>
            {cart.map((item, index) => (
                <li key={index} class='cartItem'>
                    {item}
                    <button className='deleteItem' onClick={() => DeleteItem(item)}>Delete</button>
                </li>
                ))}
        </ul> : <h4 className='emptyCartMessage'>Sepetinize henüz ürün eklemediniz!</h4>}
        </>
    )
}

export default Cart
