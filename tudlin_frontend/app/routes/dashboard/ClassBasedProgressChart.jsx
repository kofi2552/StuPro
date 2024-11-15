import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Sample data for class progress
const classData = {
  labels: ["Class A", "Class B", "Class C", "Class D"],
  datasets: [
    {
      label: "Class Scores",
      data: [85, 90, 75, 98],
      backgroundColor: "rgb(79, 106, 248)",
    },
  ],
};

const ClassBasedProgressChart = () => {
  return (
    <div>
      <h2>Class Based Progress</h2>
      <Bar data={classData} options={{ responsive: true }} />
    </div>
  );
};

export default ClassBasedProgressChart;
