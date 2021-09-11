import {createStore} from 'redux'


const initialState = {
  products: []
}

const rootReducer = (state = initialState, {type, products}) => {
  switch (type){
    case 'UPDATE_DATA':
      return {...state, ...products}
    default:
      return {...state}

  }
}

const store = createStore(rootReducer)
export default store;