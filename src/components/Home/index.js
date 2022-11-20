import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Brands from '../Brands'

import Products from '../Products'

import CartView from '../CartView'

import CartReview from '../CartReview'

import './index.css'

const apiConstantStatus = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    progress: 'IN_PROGRESS',
  }

class Home extends Component {

    state = {apiStatus : apiConstantStatus.initial,brandsList: [], brandId: ""}

    clickBrand = value => {
        this.setState({brandId : value})
    }

    componentDidMount() {
        this.getBrandsList()
    }

    getBrandsList = async () => {
        this.setState({apiStatus : apiConstantStatus.progress})
        const response = await fetch("https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json")
        
        if (response.ok) {
            const data = await response.json()
            const fetchedData = data.map(e => ({
                brand : e.brand,
                categoryId : e.category_id,
                cgstPercentage : e.cgst_percentage,
                colorCode : e.color_code,
                defaultUnitId : e.default_unit_id,
                description : e.description,
                hsn : e.hsn,
                icon : e.icon,
                id : e.id,
                info : e.info,
                isActive : e.is_active,
                isExchangeCatalog : e.is_exchange_catalog,
                isNonExchangeCatalog : e.is_non_exchange_catalog,
                modifiedAt : e.modified_at,
                name : e.name,
                numberOfBuyers : e.number_of_buyers,
                oldId : e.old_id,
                price : e.price,
                qualityReq : e.quality_req,
                seq : e.seq,
                sgstPercentage : e.sgst_percentage,
                weight : e.weight
            }))
            //console.log(fetchedData)
            this.setState({brandsList: fetchedData})
            this.setState({apiStatus : apiConstantStatus.success})

        } else {
            this.setState({apiStatus : apiConstantStatus.failure})
        }
        
    }

    successMethod = () => {
        const {brandsList} = this.state 
        //console.log(brandId)
        const brandNameList = []
        for (let i of brandsList) {
            brandNameList.push(i.brand)
        }
        let newUniqueBrands = brandNameList.filter((each,index) => {
            return brandNameList.indexOf(each) === index
        })
        const newArray = []
        for (let i of newUniqueBrands) {
            newArray.push({id: newUniqueBrands.indexOf(i)+1, brand : i})
        }
        //console.log(newArray)
        return (
            <div className='success-container'>
                <ul className='brands-list-container'>
                    {newArray.map(e => (
                        <Brands key={e.id} item={e} clickBrand={this.clickBrand} brandsList={brandsList} />
                    ))}
                </ul>
            </div>
        )
    }

    renderMethod = () => (
        <div className="loader-container">
            <Loader type="TailSpin" color="white" height={50} width={50} />
        </div>
    )
    
    failureButton = () => {
        this.getBrandsList()
    }


    failureMethod = () => (
        <div className="failure-container">
            <h3>Can't load brands</h3>
            <button
                type="button"
                className="nf-button"
                onClick={this.failureButton}
            >
                Try again
            </button>
        </div>
    )



    productMethods = () => {
        const {apiStatus} = this.state
        switch (apiStatus) {
            case apiConstantStatus.success:
              return this.successMethod()
            case apiConstantStatus.failure:
              return this.failureMethod()
            case apiConstantStatus.progress:
              return this.renderMethod()
            default:
              return null
        }
    }

    render() {
        const {brandId,brandsList} = this.state
        return (
            <div className='home-container'>
                <div className='card-1-home'>
                    <div className='head-1-container'>
                        <h2 className='heading-home'>Brands</h2>
                    </div>
                    <div className='head-2-container'>
                        <h2 className='heading-home'>Products of {brandId}</h2>
                    </div>
                    <div className='head-3-container'>
                        <h2 className='heading-home'>Cart</h2>
                    </div>
                </div>
                    <div className='card-2-home'>
                        <div className='brands-container'>
                            {this.productMethods()}
                        </div>
                        <div className='products-container'>
                            <Products brandId={brandId} brandsList={brandsList} />
                        </div>
                        <div className='cart-container'>
                            <CartView />
                            <CartReview />
                        </div>
                </div>
            </div>
        )
    }
}

export default Home