import React from "react";

export default function HeatMapGrid() {
  const rows = 4;
  const cols = 5;

  const rowLabels = ["1%", "2%", "3%", "4%"];
  const colLabels = ["M", "T", "W", "T", "F"];

  const data = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Math.floor(Math.random() * 100))
  );

  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateColumns: `auto repeat(${cols}, 2rem)`,
        gridTemplateRows: `repeat(${rows}, 2rem) auto`
      }}
    >
      {rowLabels.map((rowLabel, rowIndex) => (
        <React.Fragment key={`row-${rowIndex}`}>
          <div className="flex items-center justify-center text-sm font-semibold">
            {rowLabel}
          </div>

          {data[rowIndex].map((value, colIndex) => {
            const blue = Math.min(255, 100 + Math.floor((value / 100) * 155));
            const color = `rgb(59, 130, ${blue})`;

            return (
              <div
                key={`cell-${rowIndex}-${colIndex}`}
                style={{ backgroundColor: color }}
                className="rounded w-8 h-8"
              ></div>
            );
          })}
        </React.Fragment>
      ))}

      <div></div>

      {colLabels.map((label, i) => (
        <div
          key={`col-${i}`}
          className="text-center text-sm font-semibold"
        >
          {label}
        </div>
      ))}
    </div>
  );
}
