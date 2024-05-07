import { TrackStatus } from "@/laduny/commont.type";
// const CardTrack: React.FC<CardTrackProps> = ({
//   process,
//   index,
//   processLength,
// }) => {
const CardTrack = ({
  StatusID,
  StatusName,
  StatusDescription,
}: TrackStatus) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full relative p-4 my-6 text-gray-800 bg-white rounded-xl">
        <h3 className="text-lg font-semibold lg:text-xl">{StatusName}</h3>
        <p className="mt-2 leading-6">{StatusDescription}</p>
        {/* <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
          Date {process}
        </span> */}
      </div>
      {/* {index < processLength - 1 && ( // Display arrow only for first 3 elements
        <ArrowRightIcon w={12} h={8} color="#fff" />
      )} */}
    </div>
  );
};

export default CardTrack;
