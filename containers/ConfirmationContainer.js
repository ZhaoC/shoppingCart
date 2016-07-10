import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ConfirmationPage from '../components/ConfirmationPage'
import {getCartProducts , getTotalWithTax, getTax, getPageNum} from '../reducers'

class ConfirmationContainer extends Component {
  render() {
    const { products, total , tax, txtName, txtAddress, txtPhone, pageNum} = this.props
      return(
        <ConfirmationPage  
        products={products}
        total={total}
        tax = {tax}
        txtName = {txtName}
        txtAddress = {txtAddress}
        txtPhone = {txtPhone}
        pageNum = {pageNum}/> 
      )
  }
}

ConfirmationContainer.propTypes = {
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
  pageNum: PropTypes.string
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
  mapStateToProps
)(ConfirmationContainer)
