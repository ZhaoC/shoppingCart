import React, { Component, PropTypes } from 'react'
import Product from './Product'

export default class Order extends Component {
    render() {
    const { products, total, tax, txtName, txtAddress, txtPhone, onCreateOrderClicked } = this.props
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
        <h3>Order Detail</h3>
        <div>{nodes}</div>
        <p>Tax: {tax} <br/>Total: &#36;{total}</p>
        --------------------------------------------
        <h3>Contact Info</h3>
        Name: <input type="text" defaultValue={txtName} readonly="onChange" id="txtName" /> <br/>
        Address: <input type="text" defaultValue={txtAddress} readonly="onChange" id="txtAddress" /> <br/>
        Phone: <input type="text" defaultValue={txtPhone} readonly="onChange" id="txtPhone" /> <br/>
        <br/>
       </div>
    )
  }
}

Order.propTypes = {
   products: PropTypes.array,
   total: PropTypes.string,
   tax: PropTypes.string,
   onCreateOrderClicked: PropTypes.func
}
