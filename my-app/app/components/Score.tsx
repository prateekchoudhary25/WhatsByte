import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

// Define props type
interface ScoreProps {
  score: number;
  total: number;
}

const Score: FC<ScoreProps> = ({ score, total }) => {
  const data = {
    datasets: [
      {
        data: [score, total - score],
        backgroundColor: ["#438AF6", "#EDF4FF"],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="relative h-48 w-48">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16">
          <img
            src="/icons/archery.png"
            alt="Target"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Score;
