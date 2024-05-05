import CardLineChart from '@/laduny/components/admin/CardLineChart';
import CardBarChart from '@/laduny/components/admin/CardBarChart';
import CardStatistic from '@/laduny/components/admin/CardStatistic';
import React from 'react'

function page() {

  const userData = [
    { title: 'Users', total: '10', icon: 'user' },
    { title: 'Orders', total: '25', icon: 'shopping-cart' },
    { title: 'Process', total: '10', icon: 'dollar-sign' },
    { title: 'Completed', total: '10', icon: 'dollar-sign' },
  ];

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      { 
        label: new Date().getFullYear(),
        backgroundColor: "#3182ce",
        borderColor: "#3182ce",
        data: [65, 78, 66, 44, 56, 67, 75],
        fill: false,
      },
      {
        label: new Date().getFullYear() - 1,
        fill: false,
        backgroundColor: "#edf2f7",
        borderColor: "#edf2f7",
        data: [40, 68, 86, 74, 56, 60, 87],
      },
    ],
  };

  const chartDataBar = {
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: new Date().getFullYear(),
          backgroundColor: "#4a5568",
          borderColor: "#4a5568",
          data: [30, 78, 56, 34, 100, 45, 13],
          fill: false,
          barThickness: 8,
        },
        {
          label: new Date().getFullYear() - 1,
          fill: false,
          backgroundColor: "#3182ce",
          borderColor: "#3182ce",
          data: [27, 68, 86, 74, 10, 4, 87],
          barThickness: 8,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: false,
        text: "Orders Chart",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      legend: {
        labels: {
          fontColor: "rgba(0,0,0,.4)",
        },
        align: "end",
        position: "bottom",
      },
      scales: {
        xAxes: [
          {
            display: false,
            scaleLabel: {
              display: true,
              labelString: "Month",
            },
            gridLines: {
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(33, 37, 41, 0.3)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Value",
            },
            gridLines: {
              borderDash: [2],
              drawBorder: false,
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.2)",
              zeroLineColor: "rgba(33, 37, 41, 0.15)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
      },
    },
  };

  return (
    <section className='p-6 bg-white'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
      {userData.map((data, index) => (
          <CardStatistic
            key={index}
            title={data.title}
            total={data.total}
          />
        ))}
      </div>
      <CardLineChart chartData={chartData}/>
      <div className='grid grid-cols-2 gap-6'>
        <CardBarChart chartDataBar={chartDataBar}/>
        <CardBarChart chartDataBar={chartDataBar}/>
      </div>
    </section>
  )
}

export default page