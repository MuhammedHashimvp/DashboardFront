import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Sales", employees: 30 },
  { name: "Support", employees: 40 },
  { name: "Designer", employees: 35 },
  { name: "Legal", employees: 50 },
  { name: "Finance", employees: 60 },
  { name: "Operations", employees: 45 },
];

export default function BarChartTeam() {
  return (
<ResponsiveContainer width="100%" height={200}>
  <BarChart data={data}>
    <XAxis dataKey="name" axisLine={false} tickLine={false}  />
    <YAxis hide /> 
    <Tooltip />
    <Bar dataKey="employees" fill="#3b82f6"     radius={[20, 20, 20, 20]}
      barSize={40} />
  </BarChart>
</ResponsiveContainer>
  );
}
