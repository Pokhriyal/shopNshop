import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
} from '../../constants/productConstant';

const initialState = { products: [{ key: 'value' }] };
const allProductReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case 'testdata':
      return {
        products: [...state.products, payload],
      };
    case ALL_PRODUCTS_SUCCESS:
      return {
        // loading: false,
        products: payload.products,
        // productsCount: payload.productsCount,
        // resPerPage: payload.resPerPage,
        // filteredProductsCount: payload.filteredProductsCount,
      };
    case ALL_PRODUCTS_FAIL:
    case ALL_PRODUCTS_REQUEST:
    default: {
      return state;
    }
  }
};

export default allProductReducer;
