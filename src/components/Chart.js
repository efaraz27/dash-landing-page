import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import "../styles/Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 24,
    height: "85%",
    width: "100%",
  },

  plugins: {
    padding: "24px",
    legend: {
      display: false,
      position: "top",
      align: "end",
      labels: {
        usePointStyle: true,
      },
      font: "'Roboto', sans-serif",
    },

    title: {
      display: false,
      text: "Your work summary",
      align: "start",
      color: "#000",
      font: {
        size: "16px",
      },
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        // forces step size to be 50 units
        stepSize: 25,
      },
    },
  },
  elements: {
    line: {
      tension: 0, // disables bezier curves
    },
  },
};

const labels = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export const data = {
  labels,
  datasets: [
    {
      label: "Last 6 months",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#3855B3",
      backgroundColor: "#3855B3",
      tension: 0.5,
    },
    {
      label: "Previous",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#ffbb00",
      backgroundColor: "#ffbb00",
      tension: 0.5,
    },
  ],
};

function Chart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div className="chart-title">
          {" "}
          <div className="main-title">Your work summary</div>
          <div className="sub-title">Dec - Jun</div>
        </div>
        <div className="legends">
          <div className="legend">
            <div className="legend-main">
              <div className="circle-violet"></div>
              <div className="legend-text">Last 6 months</div>
            </div>
            <div className="legend-sub">$8,620</div>
          </div>
          <div className="legend">
            <div className="legend-main">
              <div className="circle-orange"></div>
              <div className="legend-text">previous</div>
            </div>
            <div className="legend-sub">$8,620</div>
          </div>
        </div>
      </div>
      <div className="chart">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default Chart;
