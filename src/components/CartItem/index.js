import {Component} from 'react'

import  {ImCross} from 'react-icons/im'

import CartContext from '../../context/CartContext'

import './index.css'

class CartItem extends Component {
    render() {
        const {cartItem} = this.props 
        return (
            <CartContext.Consumer>
        {value => {
            
            const {name,price,quantity,icon,id} = cartItem
            const {removeCartItem} = value
            const onRemoveCartItem = () => {
                removeCartItem(id)
            }
            return (
                <li className='cart-list-item'>
                    <img src={icon} className="brand-img" alt="logo" />
                    <div className='cart-item-card-1'>
                        <p className='product-para-1'>{name}</p>
                        <div className='inner-cart-item-card-1'>
                            <p className='product-para-2'>Qty: {quantity}</p>
                            <p className='product-para-2'>Total: {quantity*price}</p>
                        </div>
                    </div>
                    <button type="butoon" className='cross'  onClick={onRemoveCartItem}>
                        <ImCross />
                    </button>
                </li>
            )
        }}
    </CartContext.Consumer>
        )
    }
}

export default CartItem