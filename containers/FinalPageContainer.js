import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import FinalPage from '../components/FinalPage'

 class FinalPageContainer extends Component {
  render() {
      return(
        <FinalPage /> 
      )
  }
}

FinalPageContainer.propTypes = {

}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(
    mapStateToProps
)(FinalPageContainer)
