import React from "react";
import CardTrack from "./CardTrack";

const ContainerCardTrack = () => {
  const process = [1, 2, 3, 4];
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-4">
      {process.map((proces, index) => (
        <React.Fragment key={index}>
          <CardTrack process={proces} index={index} processLength={process.length} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default ContainerCardTrack;