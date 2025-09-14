import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const data = {
  labels: [
    "Category A",
    "Category B",
    "Category C",
    "Category D",
    "Category E",
  ],
  datasets: [
    {
      label: "Data Series 1",
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      data: [12, 19, 3, 5, 2],
    },
  ],
};

const IncomeTrend = () => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default IncomeTrend;
