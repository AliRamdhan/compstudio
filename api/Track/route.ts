import axios from "axios";

export const GetTrackSpesific = async ({
  trackNumber,
}: {
  trackNumber: string;
}) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/track/${trackNumber}`
    );
    return response.data.Track;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const GetTrackStatusStatistic = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/track/all`
    );
    return response.data.Tracks;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export async function getServerSideProps({ req, res }: { req: any; res: any }) {
  // Extract trackNumber from query parameters
  const { trackNumber } = req.query;

  // Call GetTrackSpesific with trackNumber
  const tracks = await GetTrackSpesific({ trackNumber });

  return {
    props: {
      tracks,
    },
  };
}
