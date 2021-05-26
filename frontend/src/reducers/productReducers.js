import * as actionTypes from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return { products: [], loading: true };

    case actionTypes.PRODUCT_LIST_SUCCESS:
      return { products: action.payload, loading: false };

    case actionTypes.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DETAILS_REQUEST:
      return { oading: true, ...state };

    case actionTypes.PRODUCT_DETAILS_SUCCESS:
      return { product: action.payload, loading: false };

    case actionTypes.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
