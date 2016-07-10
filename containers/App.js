import React, { Component , PropTypes} from 'react'
import {createStore } from 'redux'
import { connect} from 'react-redux'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import OrderContainer from './OrderContainer'
import ConfirmationContainer from './ConfirmationContainer'
import FinalPageContainer from './FinalPageContainer'
import order from '../reducers/order'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      showNext: 1
    }
  }

  onClickNext(e){
    e.preventDefault();
    this.setState({showNext: this.state.showNext + 1})
  }

  onClickPre(e){
    e.preventDefault();
    this.setState({showNext: this.state.showNext - 1})
  }
  
  render() {
   const {txtName, txtAddress, txtPhone, pageNum, total} = this.props

   let storeOrder = createStore(order); //get the state value 
   console.log('state value: ')
   console.log(this.state.showNext);

   var pageComponent;

 if(this.state.showNext == 4){
     pageComponent = [<FinalPageContainer/>, <input type="submit" value="Back" onClick={this.onClickPre.bind(this)} />]
        return (
              <div>
                {pageComponent}
              </div> 
            )
      
   }
   else if(this.state.showNext == 3){
     pageComponent = [<ConfirmationContainer/>, <input type="submit" value="Back" onClick={this.onClickPre.bind(this)} /> ,
            <input type="submit" value="Next" onClick={this.onClickNext.bind(this)} />]
        return (
              <div>
                {pageComponent}
              </div> 
            )
      
   } else if (this.state.showNext == 2){
     pageComponent = [<OrderContainer/>, <input type="submit" value="Back" onClick={this.onClickPre.bind(this)} /> ,
            <input type="submit" value="Next" onClick={this.onClickNext.bind(this)} />]
             return (
                <div>
                  {pageComponent}
                </div> 
    )
   } else {
          pageComponent = [<ProductsContainer />,
            <CartContainer/>,
            <input type="submit" value="Next" onClick={this.onClickNext.bind(this)} />]
             return (
                <div>
                  {pageComponent}
                </div> 
    )
   }
     
  }
}

OrderContainer.propTypes = {
  total: PropTypes.string,
  txtName: PropTypes.string,
  txtAddress: PropTypes.string,
  txtPhone: PropTypes.string,
  pageNum: PropTypes.string
}
