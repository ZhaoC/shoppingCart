import React, { Component, PropTypes } from 'react'
import Product from './Product'

export default class ConfirmationPage extends Component{
    render() {
    const { products, total, tax, txtName, txtAddress, txtPhone } = this.props
    const nodes = 
      products.map(product =>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}/>
    )

    return (
      <div>
        <h2>Order Placed!</h2>
        <h3>Items:</h3>
        <div>{nodes}</div>
        <p>Tax: {tax} <br/>Total: &#36;{total}</p>
        --------------------------------------------
        <h3>Contact Info</h3>
        Name: {txtName} <br/>
        Address: {txtAddress} <br/>
        Phone: {txtPhone} <br/>
       </div>
    )
  }
}

ConfirmationPage.propTypes = {
   products: PropTypes.array,
   total: PropTypes.string,
   tax: PropTypes.string,
   txtName: PropTypes.string,
   txtAddress: PropTypes.string,
   txtPhone: PropTypes.string
}
