import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

// Sample data for individual student progress
const studentData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Student Score",
      data: [70, 80, 90, 95],
      fill: false,
      borderColor: "rgb(79, 106, 248)",
      tension: 0.1,
    },
  ],
};

const IndividualStudentProgressChart = () => {
  return (
    <div>
      <h2>Individual Student Progress</h2>
      <Line data={studentData} options={{ responsive: true }} />
      <button className="mt-4 button">Manage</button>
    </div>
  );
};

export default IndividualStudentProgressChart;
