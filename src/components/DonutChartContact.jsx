import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Permanent", value: 80 },
  { name: "Contract", value: 11.5 },
  { name: "Part-Time", value: 8.5 },
];

const COLORS = ["#3b82f6", "#10b981", "#facc15"];

export default function DonutChartContact() {

  return (
    <div className="relative w-full h-[120px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="90%"
            startAngle={180}
            endAngle={0}
            innerRadius={50}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      

<div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-y-9">
  <h3 className="text-3xl font-semibold text-gray-700">800</h3>
</div>
<ul className="flex w-full justify-between">
  <li className="list-none text-center">
    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mb-1"> </span>
     Permenant <br />
    <span className="block text-sm text-gray-500">80%</span>
  </li>
  <li className="list-none text-center">
    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mb-1"> </span>
     Contract <br />
    <span className="block text-sm text-gray-500">11.5%</span>
  </li>
  <li className="list-none text-center">
    <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mb-1"> </span>
     Part-Time <br />
    <span className="block text-sm text-gray-500">8.5%</span>
  </li>
</ul>

    </div>
  );
}
