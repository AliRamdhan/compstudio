"use client";
import CardLineChart from "@/laduny/components/admin/CardLineChart";
import CardBarChart from "@/laduny/components/admin/CardBarChart";
import CardStatistic from "@/laduny/components/admin/CardStatistic";
import React, { useEffect, useState } from "react";
import { GetAllProductData } from "@/laduny/api/Products/route";
import { GetTrackStatusStatistic } from "@/laduny/api/Track/route";
import { GetUser } from "@/laduny/api/User/route";
import { TrackProgress } from "@/laduny/commont.type";

function page() {
  const [totalProduct, setTotalProduct] = useState(0);
  const [productDone, setProductDone] = useState(0);
  const [productCheckingPreparation, setCheckingPreparation] = useState(0);
  const [productService, setProductService] = useState(0);
  const [productConsultation, setProductConsultation] = useState(0);
  const [totalUserActive, setTotalUserActive] = useState(0);
  const [chartDataBar, setChartDataBar] = useState({});

  const [tracksChecking1, setTracksChecking1] = useState<TrackProgress[]>([]);
  const [tracksChecking2, setTracksChecking2] = useState<TrackProgress[]>([]);
  const [tracksChecking3, setTracksChecking3] = useState<TrackProgress[]>([]);
  const [tracksChecking4, setTracksChecking4] = useState<TrackProgress[]>([]);

  //const [tracks, setTracks] = useState<TrackProgress[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const products = await GetAllProductData();
        const tracks: TrackProgress[] = await GetTrackStatusStatistic();

        const userTotal = await GetUser();

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

        const trackCounts: Record<string, number> = {};
        tracks.forEach((track) => {
          const createdAt = new Date(track.CreatedAt);
          const month = createdAt.toLocaleString("default", { month: "long" }); // Nama bulan
          trackCounts[month] = (trackCounts[month] || 0) + 1;
        });

        //set
        setTotalUserActive(totalUserActive);
        setCheckingPreparation(productCheckingPreparation);
        setProductConsultation(productConsultation);
        setProductService(productService);
        setProductDone(productDone);
        setTotalProduct(totalProduct);

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

  return (
    <section className="p-6 bg-white">
      <div className="text-black">
        Preparation : {tracksChecking1.length}
        Service : {tracksChecking2.length}
        Process : {tracksChecking3.length}
        Done : {tracksChecking4.length}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardStatistic title="Users" total={totalUserActive} />
        <CardStatistic title="Product" total={totalProduct} />
        <CardStatistic title="Done" total={productDone} />
        <CardStatistic
          title="Checking Preparation"
          total={productCheckingPreparation}
        />
        <CardStatistic title="Consultation" total={productConsultation} />
        <CardStatistic title="Service" total={productService} />
      </div>
      \{" "}
      <div>
        <CardBarChart chartDataBar={chartDataBar} />
      </div>
    </section>
  );
}

export default page;
