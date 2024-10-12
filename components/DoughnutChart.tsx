"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1000, 900, 100],
        backgroundColor: [ 'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',],
      },
    ],
    labels: ["SBI", "HDFC", "ICICI"],
  };
  return (
      <Doughnut
        data={data}
        options={{
          cutout: "60%",
          plugins: {
            legend: {
              display: false,
            },
            
          },
        }}
      />
  );
};

export default DoughnutChart;
