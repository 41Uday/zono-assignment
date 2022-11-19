import ProductItem from '../ProductItem'

import './index.css'

const Products = props => {
    const {brandId,brandsList} = props 
    const resultantArray = brandsList.filter(each => each.brand === brandId)
    //console.log(resultantArray)
    return (
        <div>
            <ul className='products-list-container'>
                {resultantArray.map(e => (
                    <ProductItem key={e.id} productItem={e} />
                ))}
            </ul>
        </div>
    )
}

export default Products