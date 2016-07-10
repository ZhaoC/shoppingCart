import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import order, * as fromOrder from './order'
import products, * as fromProducts from './products'

export default combineReducers({
  cart,
  products,
  order
})

function getAddedIds(state) {
  return fromCart.getAddedIds(state.cart)
}

function getQuantity(state, id) {
  return fromCart.getQuantity(state.cart, id)
}

function getProduct(state, id) {
  return fromProducts.getProduct(state.products, id)
}

export function getTotal(state) {
  return getAddedIds(state).reduce((total, id) =>
    total + getProduct(state, id).price * getQuantity(state, id),
    0
  ).toFixed(2)
}

export function getTotalWithTax(state){
  return (getTotal(state) * 1.13).toFixed(2)
}

export function getTax(state){
  return (getTotal(state) * 0.13).toFixed(2);
}

export function getCartProducts(state) {
  return getAddedIds(state).map(id => Object.assign(
    {},
    getProduct(state, id),
    {
      quantity: getQuantity(state, id)
    }
  ))
}

export function getPageNum(state){
  return fromOrder.order
}
