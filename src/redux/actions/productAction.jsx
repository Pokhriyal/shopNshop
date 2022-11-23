import axios from 'axios';

import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
} from '../../constants/productConstant';

const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });
    const { data } = await axios.get('http://localhost:3004/products');
    dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: { products: data } });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export default getAllProducts;
