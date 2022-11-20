import {Component} from 'react'

import CartContext from '../../context/CartContext'

import './index.css'
 
class CartReview extends Component {

    state = {isError : false,error : "",name : "",email : "",number : ""}

    nameChange = event => {
        //console.log(event.target.value)
        this.setState({name : event.target.value})
    }

    emailChange = event => {
        this.setState({email : event.target.value})
    }

    numberChange = event => {
        this.setState({number : event.target.value})
    }

    render() {
        const {isError,error} = this.state
        return (
            <CartContext.Consumer>
                {value => {
                    const {cartList} = value 
                    let totalQuantity = 0
                    let grandTotal = 0
                    for (let i of cartList) {
                        totalQuantity += i.quantity
                        grandTotal += (i.quantity) * (i.price)
                    }

                    const checkoutButton = () => {
                        const {name,email,number} = this.state
                        const one = email.endsWith("@gmail.com")
                        const mobileOne = number.startsWith("+91")
                        //console.log(number)
                        if (cartList.length === 0) {
                            this.setState({isError : true})
                            this.setState({error : "Please add atleast one item"})
                        } else if (name.length  > 50 || name === "") {
                            this.setState({isError : true})
                            this.setState({error : "Invalid Name"})
                        } else if (one === false || email === "") {
                            this.setState({isError : true})
                            this.setState({error : "Invalid e-mail"})
                        } else if (number.length !== 13 && mobileOne === false) {
                            this.setState({isError : true})
                            this.setState({error : "Invalid MobileNumber"})
                        } else {
                            this.setState({isError : false})
                            const finalConsoleResult = {"total no of Items" : totalQuantity, "grand Total" : grandTotal}
                            console.log(JSON.stringify(finalConsoleResult))
                        }
                    }
                    

                    const charFunction = (event) => {
                        return (event.charCode > 64 && 
                            event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)
                    }

                    return (
                        <div className='cart-review-container'>
                            <h1 className='cart-review-para'>Total No.of Items:  <span className='span-cart'>{totalQuantity}</span></h1>
                            <h1 className='cart-review-para par-2-cart'>Grand Total:  <span className='span-cart'>{grandTotal}</span></h1>
                            <input type="text" className='input-type' placeholder='Name' onKeyPress={charFunction} onChange={this.nameChange} />
                            <input type="text" className='input-type' placeholder='Email' onChange={this.emailChange} />
                            <input type="text" className='input-type' placeholder='Mobile' onChange={this.numberChange} />
                            <button type="button" className='checkout-button' onClick={checkoutButton}>Checkout</button>
                            {isError && <p className='error'>*{error}</p>}
                        </div>
                    )
                }}
            </CartContext.Consumer>
        )
    }
}

export default CartReview