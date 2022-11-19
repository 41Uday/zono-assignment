import './index.css'

const Brands = props => {
    const {item,clickBrand,brandsList} = props 
    const {brand} = item
    const brandClick = () => {
        clickBrand(brand)
    }
    const imageLink = brand === "Sony" ? "https://wallpapercave.com/wp/wp2016639.jpg" : "https://wallpaper.dog/large/10864715.jpg"
    const result = brandsList.filter(e => e.brand === brand)
    const count = result.length
    return (
        <li onClick={brandClick} className="brand-list-item">
            <img src={imageLink} className="brand-img" alt="logo" />
            <div className='brand-list-card-1'>
                <h1 className='brand-head'>{brand}</h1>
                <p className='brand-para'>Product Count : <span className='para-span'>{count}</span></p>
            </div>
            
        </li>
    )
}

export default Brands