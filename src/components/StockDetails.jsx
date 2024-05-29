import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStockDetailsAction } from '../redux/actions/stockActions';
import PriceGraph from './PriceGraph';

const StockDetails = () => {
  const { ticker,name } = useParams();
  const dispatch = useDispatch();
  const { loading, stockDetails, error } = useSelector((state) => state.stocks);
console.log("stockDetails1",name)
  useEffect(() => {
    dispatch(fetchStockDetailsAction(ticker));
  }, [dispatch, ticker]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const historyData = stockDetails.results ? transformDataForGraph(stockDetails.results.slice(0, 10)) : [];

  console.log('Stock Details:', stockDetails);
  console.log('History Data:', historyData);

  return (
    <div style={{ backgroundColor: 'black', color: 'white',  }}>
      <h1>{ticker} Details</h1>
      <PriceGraph history={historyData} />
    </div>
  );
};

const transformDataForGraph = (data) => {
  return data.map((item) => ({
    time: new Date(item.t).toLocaleTimeString(), // Convert timestamp to human-readable time
    price: item.c, // Use the closing price
  }));
};

export default StockDetails;
