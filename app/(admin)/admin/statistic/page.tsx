"use client";
import CardLineChart from "@/laduny/components/admin/CardLineChart";
import CardBarChart from "@/laduny/components/admin/CardBarChart";
import CardStatistic from "@/laduny/components/admin/CardStatistic";
import React, { useEffect, useState } from "react";
import { GetAllProductData } from "@/laduny/api/Products/route";
import { GetTrackStatusStatistic } from "@/laduny/api/Track/route";
import { GetUser } from "@/laduny/api/User/route";
import { Service, TrackProgress } from "@/laduny/commont.type";
import { GetAllService } from "@/laduny/helpers/api-service";
function page() {
  const [totalProduct, setTotalProduct] = useState(0);
  const [productDone, setProductDone] = useState(0);
  const [productCheckingPreparation, setCheckingPreparation] = useState(0);
  const [productService, setProductService] = useState(0);
  const [productConsultation, setProductConsultation] = useState(0);
  const [totalUserActive, setTotalUserActive] = useState(0);

  const [tracksChecking1, setTracksChecking1] = useState<TrackProgress[]>([]);
  const [tracksChecking2, setTracksChecking2] = useState<TrackProgress[]>([]);
  const [tracksChecking3, setTracksChecking3] = useState<TrackProgress[]>([]);
  const [tracksChecking4, setTracksChecking4] = useState<TrackProgress[]>([]);

  const [serviceCat1, setServiceCat1] = useState<Service[]>([]);
  const [serviceCat2, setServiceCat2] = useState<Service[]>([]);
  const [serviceCat3, setServiceCat3] = useState<Service[]>([]);
  const [serviceCat4, setServiceCat4] = useState<Service[]>([]);

  const [chartDataBar, setChartDataBar] = useState({});
  const [chartLineBar, setLineBar] = useState({});
  //const [tracks, setTracks] = useState<TrackProgress[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const products = await GetAllProductData();
        const tracks: TrackProgress[] = await GetTrackStatusStatistic();
        const userTotal = await GetUser();
        const services: Service[] = await GetAllService();

        const tracksChecking = tracks.filter(
          (status) => status.TrackStatusRefer === 1
        );
        const tracksSercvice = tracks.filter(
          (status) => status.TrackStatusRefer === 2
        );
        const tracksPP = tracks.filter(
          (status) => status.TrackStatusRefer === 3
        );
        const tracksComplete = tracks.filter(
          (status) => status.TrackStatusRefer === 3
        );
        setTracksChecking1(tracksChecking);
        setTracksChecking2(tracksSercvice);
        setTracksChecking3(tracksPP);
        setTracksChecking4(tracksComplete);

        const serviceCat1 = services.filter(
          (service) => service.CategoryService.CatName === "Hardware"
        );
        const serviceCat2 = services.filter(
          (service) => service.CategoryService.CatName === "Hardware & Software"
        );
        const serviceCat3 = services.filter(
          (service) =>
            service.CategoryService.CatName === "Cleaning Fix & Software"
        );
        const serviceCat4 = services.filter(
          (service) => service.CategoryService.CatName === "Complete"
        );

        setServiceCat1(serviceCat1);
        setServiceCat2(serviceCat2);
        setServiceCat3(serviceCat3);
        setServiceCat4(serviceCat4);
        // const doneProduct = trackStatus.filter(status => status.StatusName === 'Complete');
        // const checkingPreparationProduct = trackStatus.filter(status => status.StatusName === 'Checking Preparation');
        // const serviceProduct = trackStatus.filter(status => status.StatusName === 'Service');
        // const consultationProduct = trackStatus.filter(status => status.StatusName === 'Consultation');
        const totalUser = userTotal.filter((role) => role.roleUser != 1);

        // length
        // const productDone = doneProduct.length;
        // const productCheckingPreparation = checkingPreparationProduct.length;
        // const productService = serviceProduct.length;
        // const productConsultation = consultationProduct.length;
        const totalProduct = products.length;
        const totalUserActive = totalUser.length;

        //set
        setTotalUserActive(totalUserActive);
        setCheckingPreparation(productCheckingPreparation);
        setProductConsultation(productConsultation);
        setProductService(productService);
        setProductDone(productDone);
        setTotalProduct(totalProduct);

        const trackCategories: Record<number, string> = {
          1: "Hardware",
          2: "Cleaning Fix",  
          6: "Hardware & Software",
          4: "Cleaning Fix & Software",
          5: "Complete",
        };

        const trackCounts: Record<string, number> = {};
        tracks.forEach((track) => {
          const createdAt = new Date(track.CreatedAt);
          const month = createdAt.toLocaleString("default", { month: "long" }); // Nama bulan
          trackCounts[month] = (trackCounts[month] || 0) + 1;
        });

        const trackCategory: Record<string, number> = {};

        tracks.forEach((track) => {
          const serviceCategory = track.Service.ServiceCategory;
          console.log(serviceCategory);
          const categoryName = trackCategories[serviceCategory];

          if (!trackCategory[categoryName]) {
            trackCategory[categoryName] = 0;
          }

          trackCategory[categoryName]++;
        });

        const chartDataService = {
          data: {
            labels: Object.keys(trackCategory),
            datasets: [
              {
                label: "Total Service",
                backgroundColor: "#4a5568",
                borderColor: "#4a5568",
                data: Object.values(trackCategory),
                fill: false,
                barThickness: 8,
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
          },
        };

        setLineBar(chartDataService);

        const chartData = {
          data: {
            labels: Object.keys(trackCounts),
            datasets: [
              {
                label: "Total Service",
                backgroundColor: "#4a5568",
                borderColor: "#4a5568",
                data: Object.values(trackCounts),
                fill: false,
                barThickness: 8,
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
          },
        };

        // Set state data chart
        setChartDataBar(chartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // const chartData = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [
  //     {
  //       label: new Date().getFullYear(),
  //       backgroundColor: "#3182ce",
  //       borderColor: "#3182ce",
  //       data: [65, 78, 66, 44, 56, 67, 75],
  //       fill: false,
  //     },
  //     {
  //       label: new Date().getFullYear() - 1,
  //       fill: false,
  //       backgroundColor: "#edf2f7",
  //       borderColor: "#edf2f7",
  //       data: [40, 68, 86, 74, 0, 60, 87],
  //     },
  //   ],
  // };

  // const chartDataBar = {
  //   data: {
  //     labels: ["January", "February", "March", "April", "May", "June", "July"],
  //     datasets: [
  //       {
  //         label: new Date().getFullYear(),
  //         backgroundColor: "#4a5568",
  //         borderColor: "#4a5568",
  //         data: [30, 78, 56, 34, 100, 45, 13],
  //         fill: false,
  //         barThickness: 8,
  //       },
  //       {
  //         label: new Date().getFullYear() - 1,
  //         fill: false,
  //         backgroundColor: "#3182ce",
  //         borderColor: "#3182ce",
  //         data: [27, 68, 86, 74, 10, 4, 87],
  //         barThickness: 8,
  //       },
  //     ],
  //   },
  //   options: {
  //     maintainAspectRatio: false,
  //     responsive: true,
  //     title: {
  //       display: false,
  //       text: "Orders Chart",
  //     },
  //     tooltips: {
  //       mode: "index",
  //       intersect: false,
  //     },
  //     hover: {
  //       mode: "nearest",
  //       intersect: true,
  //     },
  //     legend: {
  //       labels: {
  //         fontColor: "rgba(0,0,0,.4)",
  //       },
  //       align: "end",
  //       position: "bottom",
  //     },
  //     scales: {
  //       xAxes: [
  //         {
  //           display: false,
  //           scaleLabel: {
  //             display: true,
  //             labelString: "Month",
  //           },
  //           gridLines: {
  //             borderDash: [2],
  //             borderDashOffset: [2],
  //             color: "rgba(33, 37, 41, 0.3)",
  //             zeroLineColor: "rgba(33, 37, 41, 0.3)",
  //             zeroLineBorderDash: [2],
  //             zeroLineBorderDashOffset: [2],
  //           },
  //         },
  //       ],
  //       yAxes: [
  //         {
  //           display: true,
  //           scaleLabel: {
  //             display: false,
  //             labelString: "Value",
  //           },
  //           gridLines: {
  //             borderDash: [2],
  //             drawBorder: false,
  //             borderDashOffset: [2],
  //             color: "rgba(33, 37, 41, 0.2)",
  //             zeroLineColor: "rgba(33, 37, 41, 0.15)",
  //             zeroLineBorderDash: [2],
  //             zeroLineBorderDashOffset: [2],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // };

  return (
    <section className="p-6 bg-white">
      {/* <div className="text-black">
        Preparation : {tracksChecking1.length}
        Service : {tracksChecking2.length}
        Process : {tracksChecking3.length}
        Done : {tracksChecking4.length}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <CardStatistic title="Users" total={totalUserActive} />
        <CardStatistic title="Product" total={totalProduct} />
        <CardStatistic title="Total Message" total={totalProduct} />
        <CardStatistic title="Total Services" total={totalProduct} />
        <CardStatistic
          title="Checking Preparation"
          total={tracksChecking1.length}
        />
        <CardStatistic title="Consultation" total={tracksChecking2.length} />
        <CardStatistic title="Service" total={tracksChecking3.length} />
        <CardStatistic title="Done" total={tracksChecking4.length} />
        <CardStatistic title="Service Hardware" total={serviceCat1.length} />
        <CardStatistic
          title="Service Hardware & Software"
          total={serviceCat2.length}
        />
        <CardStatistic
          title="Service Cleaning Fix & Software"
          total={serviceCat3.length}
        />
        <CardStatistic title="Service Complete" total={serviceCat4.length} />
      </div>
      <CardLineChart chartData={chartLineBar} />
      <div>
        <CardBarChart chartDataBar={chartDataBar} />
      </div>
    </section>
  );
}

export default page;
