import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

// Sample data for subject progress
const subjectData = {
  labels: ["Math", "Science", "English", "History"],
  datasets: [
    {
      label: "Subject Scores",
      data: [400, 300, 300, 200],
      backgroundColor: [
        "rgb(14, 234, 205)",
        "rgb(79, 106, 248)",
        "rgb(255, 202, 55)",
        "rgb(211, 70, 233)",
      ],
    },
  ],
};

const SubjectBasedProgressChart = () => {
  return (
    <div>
      <h2>Subject Based Progress</h2>
      <Pie data={subjectData} options={{ responsive: true }} />
    </div>
  );
};

export default SubjectBasedProgressChart;
