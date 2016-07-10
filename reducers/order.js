import {
  CREATE_ORDER
} from '../constants/ActionTypes'

const initialState = {pageNum: 2}

export default function order(state = initialState.pageNum, action){
    switch(action.type){
        case CREATE_ORDER:
           initialState.pageNum = state+1
          return state+1
        default:
          return state
  }
}