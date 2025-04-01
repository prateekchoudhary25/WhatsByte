import { FC } from "react";

// Define Subject type
interface Subject {
  label: string;
  progressBarColor: string;
  textColor: string;
  thumb: string;
  progress: string;
}

const Syllabus: FC = () => {
  // Define subjects with type safety
  const subjects: Subject[] = [
    {
      label: "HTML Tools, Forms, History",
      progressBarColor: "bg-blue-500",
      textColor: "text-blue-500",
      thumb: "bg-blue-100",
      progress: "80%",
    },
    {
      label: "Tags and References in HTML",
      progressBarColor: "bg-orange-500",
      textColor: "text-orange-500",
      thumb: "bg-orange-100",
      progress: "60%",
    },
    {
      label: "Table and Reference in HTML",
      progressBarColor: "bg-red-500",
      textColor: "text-red-500",
      thumb: "bg-red-100",
      progress: "24%",
    },
    {
      label: "Tables & CSS Basics",
      progressBarColor: "bg-green-500",
      textColor: "text-green-500",
      thumb: "bg-green-100",
      progress: "96%",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 lg:p-6 border">
      <h2 className="text-lg font-semibold mb-4 lg:mb-6">
        Syllabus Wise Analysis
      </h2>
      <div className="space-y-6">
        {subjects.map((sub, index) => (
          <div key={index}>
            <p className="font-medium text-gray-400">{sub.label}</p>
            <div className="flex items-center gap-5 mt-2">
              <div className={`flex-1 ${sub.thumb} rounded-full h-2`}>
                <div
                  className={`${sub.progressBarColor} h-2 rounded-full`}
                  style={{ width: sub.progress }}
                ></div>
              </div>
              <span className={`font-bold ${sub.textColor}`}>
                {sub.progress}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syllabus;
