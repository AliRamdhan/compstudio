  "use client"
  import React, { useEffect } from "react";
  import Chart from 'chart.js/auto';

  export default function CardLineChart({ chartData }) {
    useEffect(() => {
      if (!chartData) return; // Ensure chartData is provided
  
      const { labels, datasets, options } = chartData;
  
      var config = {
        type: "line",
        data: {
          labels: labels || [],
          datasets: datasets || [],
        },
        options: options || {},
      };
  
      var ctx = document.getElementById("line-chart").getContext("2d");
  
      if (window.myLine !== undefined) {
        window.myLine.destroy();
      }
  
      window.myLine = new Chart(ctx, config);
    }, [chartData]);
  
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-black mb-1 text-xs font-semibold">
                  Overview
                </h6>
                <h2 className="text-black text-xl font-semibold">Sales value</h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            {/* Chart */}
            <div className="relative h-[300px]">
              <canvas id="line-chart"></canvas>
            </div>
          </div>
        </div>
      </>
    );
  }