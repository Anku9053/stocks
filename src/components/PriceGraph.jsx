import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PriceGraph = ({ history }) => {
  if (!history || history.length === 0) {
    return <p>No historical data to display.</p>;
  }

  const data = {
    labels: history.map((dataPoint, index) => `Time ${index + 1}`), // Use index for simplicity
    datasets: [
      {
        label: 'Price',
        data: history.map((dataPoint) => dataPoint.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(199, 199, 199, 0.2)',
          'rgba(83, 102, 255, 0.2)',
          'rgba(255, 219, 64, 0.2)',
          'rgba(159, 159, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
          'rgba(83, 102, 255, 1)',
          'rgba(255, 219, 64, 1)',
          'rgba(159, 159, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: { color: 'white' }, // Change x-axis text color to white
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Change x-axis grid color to be less prominent
        },
      },
      y: {
        ticks: { color: 'white' }, // Change y-axis text color to white
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Change y-axis grid color to be less prominent
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // Change legend text color to white
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to take custom dimensions
  };

  console.log('Graph Data:', data);

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: 'black' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PriceGraph;
