import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend
);

const IncomeTrend = () => {
  const monthData = [
    { month: "Jan", income: 3, growth: -20 },
    { month: "Feb", income: 4.5, growth: 30 },
    { month: "Mar", income: 6, growth: 80 },
    { month: "Apr", income: 2, growth: -60 },
    { month: "May", income: 5.5, growth: 40 },
    { month: "Jun", income: 0, growth: -100 },
  ];

  const data = {
    labels: monthData.map((d) => d.month),
    datasets: [
      {
        type: "bar",
        label: "Income",
        data: monthData.map((d) => d.income),
        backgroundColor: "#A855F7",
        borderColor: "#A855F7",
        borderWidth: 1,
        yAxisID: "y1",
      },
      {
        type: "line",
        label: "momGrowth",
        data: monthData.map((d) => d.growth),
        borderColor: "brown",
        backgroundColor: "#EF4444",
        yAxisID: "y2",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y1: {
        type: "linear",
        display: false,
        position: "left",
        grid: {
          display: false,
        },
        min: 0,
        max: 8,
      },
      y2: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
          color: "#E5E7EB",
        },
        min: -100,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
          stepSize: 50,
          color: "#9CA3AF",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9CA3AF",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#374151",
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.dataset.type === "line") {
              label += `${context.raw}%`;
            } else {
              label += `${context.raw}k`;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="p-6 ">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-sm font-medium text-gray-600 mb-2">Income Trend</h3>
        <p className="text-xs text-gray-400 mb-6">
          Your monthly income and growth for the last 6 months
        </p>

        <div className="relative h-48 w-full">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default IncomeTrend;
