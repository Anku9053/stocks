import React from 'react';
import { Link } from 'react-router-dom';
import '../ComponentCss/StockItem.css';

const StockItem = ({ stock }) => (
  <div className="stock-item">
    <h2>{stock.ticker}</h2>
    <p>{stock.name}</p>
    <p>{stock.market}</p>
    <Link to={`/stock/${stock.ticker}`}>View Details</Link>
    <Link to={`/stock/${stock.ticker}/graph`}>View Bar Graph</Link>
  </div>
);

export default StockItem;
