import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  ChartData,
  ChartOptions,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { FC } from "react";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  annotationPlugin
);

interface ChartProps {
  percentile: number;
}

const Chart: FC<ChartProps> = ({ percentile }) => {
  const keyPercentiles: number[] = [0, 10, 22, 25, 34, 40, 48, 50, 56, 60, 69, 75, 81, 95, 99];

  const studentsData: number[] = [
  10, 12, 13, 14, 16, 18, 21, 23, 22, 24, 
  28, 30, 35, 40, 38, 45, 50, 55, 60, 58, 
  65, 70, 75, 80, 85, 88, 90, 95, 100, 110, 
  120, 130, 140, 150, 160, 170, 175, 180, 185, 195, 
  200, 190, 185, 175, 160, 150, 140, 125, 110, 95, 
  85, 75, 65, 55, 50, 45, 40, 35, 30, 28, 
  25, 23, 22, 20, 18, 16, 14, 12, 10, 10, 
  10, 10, 10, 9, 9, 9, 8, 8, 7, 7, 
  6, 6, 5, 5, 4, 4, 3, 3, 3, 3,
  10, 10, 10, 9, 9, 9, 8, 8, 7, 7,
];


  const data: ChartData<"line"> = {
    labels: Array.from({ length: 101 }, (_, i) => i.toString()),
    datasets: [
      {
        label: "Student Distribution",
        data: studentsData,
        borderColor: "#6a6b6b",
        borderWidth: 1,
        tension: 1,
        cubicInterpolationMode: "monotone",
        fill: false,
        spanGaps: true,
        pointRadius: (context) => {
          const index = context.dataIndex;
          if (index === percentile) return 6;
          if (keyPercentiles.includes(index)) return 4;
          return 0;
        },
        pointHoverRadius: 6,
        pointBackgroundColor: (context) => {
          const index = context.dataIndex;
          if (index === percentile) return "purple";
          if (keyPercentiles.includes(index)) return "rgba(255, 255, 255, 0.8)";
          return "rgba(85, 85, 255, 0.3)";
        },
        pointBorderColor: (context) => {
          const index = context.dataIndex;
          if (index === percentile) return "purple";
          if (keyPercentiles.includes(index)) return "rgba(0, 0, 0, 0.8)";
          return "rgba(85, 85, 255, 0.3)";
        },
        pointHoverBackgroundColor: "rgba(85, 85, 255, 0.8)",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        displayColors: false,
        callbacks: {
          title: function (context) {
            return `Percentile: ${context[0].label}%`;
          },
          label: function (context) {
            return `Number of Students: ${studentsData[context.dataIndex]}`;
          },
        },
      },
      annotation: {
        annotations: {
          line1: {
            type: "line",
            xMin: percentile,
            xMax: percentile,
            borderColor: "gray",
            borderWidth: 1,
          },
          text1: {
            type: "label",
            xValue: percentile,
            yValue: studentsData[percentile],
            content: ["Your Percentile"],
            font: {
              size: 14,
            },
            padding: 6,
            xAdjust: 0,
            yAdjust: -50,
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Percentile",
        },
        ticks: {
          callback: function (value) {
            if ([0, 25, 50, 75, 100].includes(Number(value))) {
              return value;
            }
            return "";
          },
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        hitRadius: 10,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default Chart;