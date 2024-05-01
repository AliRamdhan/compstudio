import React from "react";

const Page = ({ params }: { params: { trackNumber: string } }) => {
  console.log(params.trackNumber);
  return <div>Page</div>;
};

export default Page;
