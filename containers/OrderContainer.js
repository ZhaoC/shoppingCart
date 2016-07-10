import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createOrder } from '../actions'
import Order from '../components/Order'
import {getCartProducts , getTotalWithTax, getTax, getPageNum} from '../reducers'

class OrderContainer extends Component {
  render() {
    const { products, total , tax, txtName, txtAddress, txtPhone, pageNum} = this.props

      return(
        <Order 
        products={products}
        total={total}
        tax = {tax}
        txtName = {txtName}
        txtAddress = {txtAddress}
        txtPhone = {txtPhone}
        pageNum = {pageNum}
        onCreateOrderClicked={() => this.props.createOrder()}/>
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
  txtPhone: PropTypes.string,
  pageNum: PropTypes.number,
  createOrder: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: getCartProducts(state),
    total: getTotalWithTax(state),
    tax: getTax(state),
    pageNum: getPageNum(state), 
    txtName: (document.getElementById("txtName") ? document.getElementById("txtName").value : "name"),
    txtAddress: (document.getElementById("txtAddress") ? document.getElementById("txtAddress").value : "address"),
    txtPhone: (document.getElementById("txtPhone") ? document.getElementById("txtPhone").value : "phone")
  }
}

export default connect(
  mapStateToProps,
  {createOrder}
)(OrderContainer)
