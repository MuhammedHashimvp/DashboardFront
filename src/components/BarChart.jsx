import React from "react";

const BarChart = () => {
  const data = [
    { label: "Excellent", value: 38, color: "bg-blue-600" },
    { label: "Good", value: 25, color: "bg-lime-400" },
    { label: "Fair", value: 18, color: "bg-black" },
    { label: "Improved", value: 8, color: "bg-gray-300" },
  ];

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <div className="flex w-full h-6 rounded-full overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${item.color} h-full`}
            style={{ width: `${item.value}%` }}
          ></div>
        ))}
      </div>

      <div className="flex justify-between mt-2">
        {data.map((item, index) => (
          <span key={index} className="text-sm font-medium">{`${item.value}%`}</span>
        ))}
      </div>

      <div className="flex justify-between mt-2 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-1">
            <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
