"use client"
import React, { useEffect } from "react";
import Chart from "chart.js/auto";

export default function CardBarChart({ chartDataBar }) {
  useEffect(() => {
    if (!chartDataBar) return;

    let config = {
      type: "bar",
      data: chartDataBar.data,
      options: chartDataBar.options,
    };

    let ctx = document.getElementById("bar-chart").getContext("2d");
    let myBar = new Chart(ctx, config);

    return () => {
      myBar.destroy();
    };
  }, [chartDataBar]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-black text-xl font-semibold">
                Total orders
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <div className="relative h-[200px] w-[350px] md:w-[800px]">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
