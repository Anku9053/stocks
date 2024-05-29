import { fetchStocks, fetchStockDetails } from '../../api';

export const FETCH_STOCKS_REQUEST = 'FETCH_STOCKS_REQUEST';
export const FETCH_STOCKS_SUCCESS = 'FETCH_STOCKS_SUCCESS';
export const FETCH_STOCKS_FAILURE = 'FETCH_STOCKS_FAILURE';

export const FETCH_STOCK_DETAILS_REQUEST = 'FETCH_STOCK_DETAILS_REQUEST';
export const FETCH_STOCK_DETAILS_SUCCESS = 'FETCH_STOCK_DETAILS_SUCCESS';
export const FETCH_STOCK_DETAILS_FAILURE = 'FETCH_STOCK_DETAILS_FAILURE';

const fetchStocksRequest = () => ({ type: FETCH_STOCKS_REQUEST });
const fetchStocksSuccess = (stocks) => ({ type: FETCH_STOCKS_SUCCESS, stocks });
const fetchStocksFailure = (error) => ({ type: FETCH_STOCKS_FAILURE, error });

const fetchStockDetailsRequest = () => ({ type: FETCH_STOCK_DETAILS_REQUEST });
const fetchStockDetailsSuccess = (details) => ({ type: FETCH_STOCK_DETAILS_SUCCESS, details });
const fetchStockDetailsFailure = (error) => ({ type: FETCH_STOCK_DETAILS_FAILURE, error });

export const fetchStocksAction = () => async (dispatch) => {
  dispatch(fetchStocksRequest());
  try {
    const stocks = await fetchStocks();
    dispatch(fetchStocksSuccess(stocks));
  } catch (error) {
    dispatch(fetchStocksFailure(error));
  }
};

export const fetchStockDetailsAction = (ticker) => async (dispatch) => {
  dispatch(fetchStockDetailsRequest());
  try {
    const details = await fetchStockDetails(ticker);
    dispatch(fetchStockDetailsSuccess(details));
  } catch (error) {
    dispatch(fetchStockDetailsFailure(error));
  }
};