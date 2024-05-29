import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStocksAction } from '../redux/actions/stockActions';
import { Link } from 'react-router-dom';
import '../ComponentCss/StockList.css';

const StockList = () => {
  const dispatch = useDispatch();
  const { stocks, loading, error } = useSelector((state) => state.stocks);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState([1, 2]);
  const stocksPerPage = 12;

  useEffect(() => {
    dispatch(fetchStocksAction());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const indexOfLastStock = currentPage * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;
  const currentStocks = stocks.slice(indexOfFirstStock, indexOfLastStock);

  const totalPages = Math.ceil(stocks.length / stocksPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPageRange = () => {
    if (pageRange[1] < totalPages) {
      const newStart = pageRange[0] + 1;
      const newEnd = pageRange[1] + 1;
      setPageRange([newStart, newEnd]);
      setCurrentPage(newStart);
    }
  };

  const prevPageRange = () => {
    if (pageRange[0] > 1) {
      const newStart = pageRange[0] - 1;
      const newEnd = pageRange[1] - 1;
      setPageRange([newStart, newEnd]);
      setCurrentPage(newStart);
    }
  };

  return (
    <div className="stock-list-container">
      <div className="stock-list">
        {currentStocks.map((stock) => (
          <div className="stock-item" key={stock.ticker}>
            <div className="stock-image">
              <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className="stock-details">
              <p>{stock.name}</p>
              <div className="column-layout">
                <div className="column-item">
                  <p>Market</p>
                  <p>{stock.market}</p>
                </div>
                <div className="column-item">
                  <p>Active</p>
                  <p>{stock.active ? "Yes" : "No"}</p>
                </div>
                <div className="column-item">
                  <p>Type</p>
                  <p>{stock.type}</p>
                </div>
              </div>
              <div className="stock-links">
                <Link className="details-link" to={`/stock/${stock.ticker}`}>View Details</Link>
                <Link className="graph-link" to={`/stock/${stock.ticker}`}>View Graph</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPageRange} disabled={pageRange[0] === 1}>
          Back
        </button>
        {Array.from({ length: 2 }, (_, index) => pageRange[0] + index).map((page) => (
          <button
            key={page}
            onClick={() => paginate(page)}
            className={page === currentPage ? 'active' : ''}
            disabled={page > totalPages}
          >
            {page}
          </button>
        ))}
        <button onClick={nextPageRange} disabled={pageRange[1] >= totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StockList;
