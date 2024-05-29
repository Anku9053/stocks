import {
    FETCH_STOCKS_REQUEST,
    FETCH_STOCKS_SUCCESS,
    FETCH_STOCKS_FAILURE,
    FETCH_STOCK_DETAILS_REQUEST,
    FETCH_STOCK_DETAILS_SUCCESS,
    FETCH_STOCK_DETAILS_FAILURE,
  } from '../actions/stockActions';
  
  const initialState = {
    stocks: [],
    loading: false,
    error: null,
    stockDetails: {},
  };
  
  const stockReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_STOCKS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_STOCKS_SUCCESS:
        return { ...state, loading: false, stocks: action.stocks };
      case FETCH_STOCKS_FAILURE:
        return { ...state, loading: false, error: action.error };
      case FETCH_STOCK_DETAILS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_STOCK_DETAILS_SUCCESS:
        return { ...state, loading: false, stockDetails: action.details };
      case FETCH_STOCK_DETAILS_FAILURE:
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default stockReducer;
  