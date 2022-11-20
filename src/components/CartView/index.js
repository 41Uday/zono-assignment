import {Component} from 'react'

import CartItem from '../CartItem'

import CartContext from '../../context/CartContext'


import './index.css'

class CartView extends Component {
    render() {
        return (
            <CartContext.Consumer>
                {value => {
                    const {cartList} = value 
                    const cartLength = cartList.length !== 0
                    return (
                        <div>
                            {cartLength ? (
                                <ul className='cart-list-container'>
                                    {cartList.map(e => (
                                        <CartItem key={e.id} cartItem={e} />
                                    ))}
                                </ul>
                            ) : <div className='empty-cart-container'><h3 >Your Cart is Empty</h3></div>}
                        </div>
                    )
                }}
            </CartContext.Consumer>
        )
    }
}

export default CartView