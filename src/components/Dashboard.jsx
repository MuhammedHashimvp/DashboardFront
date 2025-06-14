import React from "react";
import BarChartTeam from "./BarChartTeam";
import DonutChartContact from "./DonutChartContact";
import AbsenteeismChart from "./AbsenteeismChart";
import Navigatebar from "../components/Navigatebar";
import Gridmap from "./Gridmap";
import pfp from '../assets/pfp.png'
import BarChart from "./BarChart";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigatebar/>



<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  <div className="lg:col-span-2">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="p-4 bg-white rounded-xl shadow">
      <div className="float-left">
        <h3 className="text-lg font-semibold">Head Count</h3>
        <p className="text-3xl font-bold">327</p>
        <p className="text-green-500">+4.7%</p>
      </div>
      <div className="float-end">
                      <div className="bg-blue-800 rounded-sm p-1 text-white ">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

              </div>
      </div>

      </div>
      <div className="p-4 bg-white rounded-xl shadow">
        <div className="float-left">
        <h3 className="text-lg font-semibold">HR to Employee</h3>
        <p className="text-3xl font-bold">75</p>
        <p className="text-red-500">-12%</p>
        </div>
        <div className="float-end">
              <div className="bg-blue-800 rounded-sm p-1 text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
        </div>
      </div>
      <div className="p-4 bg-white rounded-xl shadow">
        <div className="float-start">
        <h3 className="text-lg font-semibold">Status Breakdown</h3>
        <p className="text-3xl font-bold">1,350 Employees</p>
        <p className="text-green-500">87 Probation</p>
        </div>


                <div className="float-end">
              <div className="bg-blue-800 rounded-sm p-1 text-white ">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

              </div>
        </div>
      </div>
    </div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
  <div className="md:col-span-8 p-4 bg-white rounded-xl shadow">
    <h3 className="font-semibold mb-2">Track your team</h3>
    <div className="h-fit bg-white rounded-lg flex items-center justify-center text-gray-500">
      <BarChartTeam />
    </div>
  </div>

  <div className="md:col-span-4 p-4 bg-white rounded-xl shadow">
    <h3 className="font-semibold mb-2">Contact Status</h3>
    <div className="h-fit bg-white rounded-lg flex items-center justify-center text-gray-500">
      <DonutChartContact />
    </div>
  </div>

  <div className="md:col-span-8 p-4 bg-white rounded-xl shadow">
    <p className="font-sm text-sm">Identify Employees with Absences</p>
    <h3 className="font-semibold mb-2">Absenteeism</h3>
    <div className="h-32 bg-white rounded-lg flex items-center justify-center text-gray-500">
      <AbsenteeismChart />
    </div>
  </div>

  
    <div className="md:col-span-4 p-4 bg-white rounded-xl shadow">
    <div className="h-fit bg-white rounded-lg flex items-center justify-center text-gray-500">
      <Gridmap />
    </div>
  </div>
</div>

  </div>

<div className="space-y-6">
  <div className="p-4 bg-white rounded-xl shadow">
    <p className="text-sm">Top Satifaction Score</p>
    <h3 className="font-bold mb-2">Top 5 Rating</h3>
    <ul className="space-y-2">
      {[
        { name: "Alice Johnson", score: "8.5" },
        { name: "Elizabeth Kim", score: "7.8" },
        { name: "Mark Lee", score: "7.8" },
        { name: "Theodorus Ronald", score: "7.8" },
        { name: "Bessie Cooper", score: "7.2" },
      ].map((person) => (
        <li key={person.name} className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={pfp}
              alt={person.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>{person.name}</span>
          </div>
          <span className="font-bold">{person.score}</span>
        </li>
      ))}
    </ul>
  </div>

  <div className="space-y-6">
  <div className="p-4 bg-white rounded-xl shadow">
    <p className="text-sm">Perfomance Evaluation Results</p>
    <h3 className="font-bold mb-2">Metrics rating</h3>
    <div className="flex  gap-5">
      <h2 className="text-4xl">⭐7.8</h2>
      <p>average <br />rating</p>
    </div>
    <BarChart/>
  </div>
</div>
</div>

</div>

    </div>
  );
}
