"use client";

import { useState, FC } from "react";
import Chart from "@/app/components/Chart";
import Navbar from "@/app/components/Navbar";
import Score from "@/app/components/Score";
import Sidebar from "@/app/components/Sidebar";
import Stats from "@/app/components/Stats";
import Syllabus from "@/app/components/Syllabus";
import Update from "@/app/components/Update";

interface StudentStats {
  rank: number;
  percentile: number;
  score: number;
}

const Page: FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [studentStats, setStudentStats] = useState<StudentStats>({
    rank: 1,
    percentile: 30,
    score: 10,
  });

  const handleSubmit = (updatedStats: StudentStats) => {
    setStudentStats(updatedStats);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex flex-1 flex-col lg:flex-row pt-16">
        <Sidebar isOpen={isSidebarOpen} />

        <main className="flex-1 p-4 lg:p-6 lg:ml-64">
          <p className="text-gray-600 font-medium mb-4">Skill Test</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="lg:col-span-2 space-y-4 lg:space-y-6">
              <div className="bg-white rounded-lg p-4 lg:p-6 border">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                    <img
                      src="/icons/html5.svg"
                      alt="Test"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-lg font-semibold">
                      HyperText Markup Language
                    </h2>
                    <p className="text-gray-600 font-medium mt-2 text-sm">
                      Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                    </p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-2 bg-[#132277] text-white font-medium rounded-lg hover:bg-blue-900 w-full sm:w-auto"
                  >
                    Update
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 lg:p-6 border">
                <h2 className="text-lg font-semibold mb-4">Quick Statistics</h2>
                <Stats stats={studentStats} />
              </div>

              <div className="bg-white rounded-lg p-4 lg:p-6 border">
                <h2 className="text-lg font-semibold mb-4">Comparison Graph</h2>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6 text-center sm:text-left">
                  <p className="text-gray-600 flex-1">
                    <span className="font-bold">
                      You scored {studentStats.percentile}% percentile
                    </span>{" "}
                    which is lower than the average percentile 72% of all the engineers who took this assessment.
                  </p>
                  <div className="hidden sm:block w-14 h-14 bg-gray-100 rounded-full p-4 flex-shrink-0">
                    <img
                      src="/icons/up.svg"
                      alt="Graph"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full h-[300px]">
                  <Chart percentile={studentStats.percentile} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-4 lg:space-y-6">
              <Syllabus />
              <div className="bg-white rounded-lg p-4 lg:p-6 border">
                <div className="text-lg font-semibold mb-4 flex justify-between items-center">
                  <h2>Questions Analysis</h2>
                  <p className="text-blue-600">{studentStats.score}/15</p>
                </div>
                <p className="text-gray-600 text-center sm:text-left">
                  <span className="font-bold">
                    You scored {studentStats.score} questions correct out of 15.
                  </span>{" "}
                  However, it still needs some improvement.
                </p>
                <div className="flex justify-center mt-10">
                  <Score score={studentStats.score} total={15} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Update
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        stats={studentStats}
        onSubmit={handleSubmit}
      />

      {(isSidebarOpen || isModalOpen) && (
        <div
          className="fixed inset-0 z-20"
          onClick={() => {
            setSidebarOpen(false);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Page;