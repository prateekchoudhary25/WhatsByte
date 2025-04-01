import { FC } from "react";

// Define stats type
interface Stats {
  rank: number;
  percentile: number;
  score: number;
}

// Define component props
interface StatsProps {
  stats: Stats;
}

// Define type for student stats
interface Stat {
  imgSrc: string;
  value: string | number;
  label: string;
}

const Stats: FC<StatsProps> = ({ stats }) => {
  // Define student stats with icon, value, and label
  const studentStats: Stat[] = [
    {
      imgSrc: "/icons/trophy.svg",
      value: stats?.rank,
      label: "Your Rank",
    },
    {
      imgSrc: "/icons/Clipboard.svg",
      value: `${stats?.percentile}%`,
      label: "Percentile",
    },
    {
      imgSrc: "/icons/tick-green-icon.svg",
      value: `${stats?.score}/15`,
      label: "Correct Answers",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
      {studentStats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center gap-4 py-4 sm:py-0 sm:px-6 first:pt-0 sm:first:pl-0 last:pb-0 sm:last:pr-0"
        >
          <div className="w-14 h-14 bg-gray-100 rounded-full p-4 flex-shrink-0">
            <img src={stat.imgSrc} alt={stat.label} className="w-full h-full" />
          </div>
          <div className="font-medium">
            <h1 className="text-2xl font-bold">{stat.value}</h1>
            <span className="text-gray-400 uppercase">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
