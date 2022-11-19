import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

import './index.css'

const ProductItem = props => {
    const {productItem} = props
    const {name,icon,price} = productItem
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
                <button type="button" className='product-button'>
                    <AiOutlineMinus className='icon' />
                </button>
                <p className='para-cart-product'>1</p>
                <button type="button" className='product-button'>
                    <AiOutlinePlus className='icon' />
                </button>
            </div>
        </li>
    )
}

export default ProductItem