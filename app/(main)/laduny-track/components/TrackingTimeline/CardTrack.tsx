import React, { useState } from "react";
import { ArrowRightIcon } from "@chakra-ui/icons";

interface CardTrackProps {
  process: number;
  index: number;
  processLength: number;
}

const CardTrack: React.FC<CardTrackProps> = ({
  process,
  index,
  processLength,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl">
        <h3 className="text-lg font-semibold lg:text-xl">
          New Event {process}
        </h3>
        <p className="mt-2 leading-6">Description of the event {process}.</p>
        {/* <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
          Date {process}
        </span> */}
      </div>
      {index < processLength - 1 && ( // Display arrow only for first 3 elements
        <ArrowRightIcon w={12} h={8} color="#fff" />
      )}
    </div>
  );
};

export default CardTrack;
