import axios from "axios";
import { MessageForm } from "@/laduny/commont.type";
const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// CATEGORY SERVICE
export const GetAllChats = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/message/all`);
    return response.data.Messages;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
export const GetLastMessagebyService = async (serviceId: number) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/message/${serviceId}`);
    return response.data.Messages;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const GetAllChatsByServiceId = async (serviceId: number) => {
  try {
    const response = await axios.get(
      `${apiBaseUrl}/message/service/${serviceId}/message`
    );
    return response.data.Messages;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// SERVICE
export const CreateMessage = async (messageForm: MessageForm) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/message/create`,
      messageForm
    );
    return response.data;
  } catch (error) {
    console.error("Error adding service:", error);
    throw error;
  }
};
