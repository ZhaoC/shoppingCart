import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { placeOrder } from '../actions'
import Order from '../components/Order'
import {getCartProducts , getTotalWithTax, getTax} from '../reducers'

class OrderContainer extends Component {
  render() {
    const {txtName, txtAddress, txtPhone} = this.props

      return(
        <Order 
        products={products}
        total={total}
        tax = {tax}
        txtName = {txtName}
        onOrderPlaceClicked = {() => this.props.placeOrder()}/> 
      )
  }
}

OrderContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  tax: PropTypes.string,
  txtName: PropTypes.string,
  txtAddress: PropTypes.string,
  txtPhone: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    products: getCartProducts(state),
    total: getTotalWithTax(state),
    tax: getTax(state),
    txtName: (document.getElementById("txtName") ? {txtName} : "name"),
    txtPhone: (document.getElementById("txtPhone") ? {txtPhone} : "phone"),
    txtAddress: (document.getElementById("txtAddress") ? {txtAddress} : "address")
  }
}

export default connect(
  mapStateToProps,
  { placeOrder }
)(OrderContainer)
