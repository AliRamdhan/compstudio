import axios from "axios";

// Interface to represent the structure of a track status object
interface TrackStatus {
  StatusID: number;
  StatusName: string;
  StatusDescription: string;
  CreatedAt: string;
  UpdatedAt: string;
}

export const GetTrackStatus = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/track-status/all`
    );
    return response.data["Track Status"] as TrackStatus[];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const FilterTrackStatusByDescription = async (description: string) => {
    try {
      const trackStatuses = await GetTrackStatus();
      const filteredStatuses = trackStatuses.filter(status => status.StatusDescription === description);
      return filteredStatuses;
    } catch (error) {
      console.error("Error filtering track statuses by description:", error);
      return [];
    }
  };
    