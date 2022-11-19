import {Component} from 'react'

import Home from './components/Home'

import CartContext from './context/CartContext'

import './App.css';

class App extends Component {

    state = {cartList: []}
    
      addCartItem = product => {
        const {cartList} = this.state
        const res = cartList.find(e => e.id === product.id)
        if (res) {
          this.setState(prevState => ({
            cartList: prevState.cartList.map(e => {
              if (e.id === product.id) {
                const resVal = product.quantity + e.quantity
                return {...e, quantity: resVal}
              }
              return e
            }),
          }))
        } else {
          this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
        }
      }
    
      removeCartItem = id => {
        const {cartList} = this.state
        const res = cartList.filter(e => e.id !== id)
        this.setState({cartList: res})
      }
    
    

    render() {
        const {cartList} = this.state
        console.log(cartList)
        return (
            <CartContext.Provider
                value={{
                cartList,
                addCartItem: this.addCartItem,
                removeCartItem: this.removeCartItem,
                }}
            >
                <Home />
            </CartContext.Provider>
        )
    }
    
}

export default App;
