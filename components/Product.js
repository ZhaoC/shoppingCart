import React, { Component, PropTypes } from 'react'

export default class Product extends Component {
  render() {
    const { price, quantity, title, inventory } = this.props
    return <div> {title} - &#36;{price} {quantity ? `x ${quantity}` : '- Inventory '} {inventory}</div>
  }
}

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

