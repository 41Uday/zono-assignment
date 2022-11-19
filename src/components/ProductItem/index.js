import {Component} from 'react'

import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

class ProductItem extends Component {

    state = {quantity : 1}

    onDecrementQuantity = () => {
        const {quantity} = this.state
        if (quantity > 1) {
          this.setState(prevState => ({quantity: prevState.quantity - 1}))
        }
      }
    
      onIncrementQuantity = () => {
        this.setState(prevState => ({quantity: prevState.quantity + 1}))
      }

    render() {
        const {productItem} = this.props
        const {name,icon,price} = productItem
        const {quantity} = this.state
        return (
            <CartContext.Consumer>
                {value => {
                    const {addCartItem} = value
                    const onClickAddToCart = () => {
                        addCartItem({...productItem,quantity})
                    }
                    return (
                        <li className='product-list-item'>
                            <div className='product-item-card-1'>
                                <img src={icon} alt="product-logo" className='brand-img' />
                                <div>
                                    <p className='product-para-1'>{name}</p>
                                    <p className='product-para-2'>price: {price}</p>
                                </div>
                            </div>
                            <div className='product-item-card-1'>
                                <button type="button" className='product-button' onClick={this.onDecrementQuantity}>
                                    <AiOutlineMinus className='icon' />
                                </button>
                                <p className='para-cart-product'>{quantity}</p>
                                <button type="button" className='product-button' onClick={this.onIncrementQuantity}>
                                    <AiOutlinePlus className='icon' />
                                </button>
                
                                <button type="button" className='cart-button' onClick={onClickAddToCart}>Add to Cart</button>
                            </div>
                            
                        </li>
            )
        }}
            </CartContext.Consumer>
        )
    }
    

}

export default ProductItem