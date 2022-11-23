import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allProductReducer from './reducers/allProductReducer';

const reducer = combineReducers({
  allProductReducer,
});

// const initialState = {
//   cart: {
//     cartItems: localStorage.getItem('cartItems')
//       ? JSON.parse(localStorage.getItem('cartItems'))
//       : [],
//     shippingInfo: localStorage.getItem('shippingInfo')
//       ? JSON.parse(localStorage.getItem('shippingInfo'))
//       : {},
//   },
// };

const middlware = [thunk];

const store = createStore(
  reducer,
  // initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
