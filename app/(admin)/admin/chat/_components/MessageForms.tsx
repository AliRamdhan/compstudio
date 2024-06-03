"use client";
import React, {
  useRef,
  useState,
  FormEvent,
  ChangeEvent,
  useEffect,
} from "react";
import { Message, MessageForm } from "@/laduny/commont.type";
import { GetUserData } from "@/laduny/helpers/api-service";
import { CreateMessage } from "../../../../../helpers/chat-service";
const MessageForms = ({ serviceId }: { serviceId: number }) => {
  const [formData, setFormData] = useState<MessageForm>({
    MessageService: serviceId,
    MessageContent: "",
    MessageUser: 0,
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const fetchData = async () => {
      const user = await GetUserData();
      if (user) {
        setFormData((prevState) => ({
          ...prevState,
          MessageUser: user.user_id,
        }));
      } else {
        alert("Authentication required");
        window.location.href = "/auth/signin"; // Redirect to sign-in page
      }
    };
    fetchData();
  }, []);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await CreateMessage(formData);
      if (response) {
        alert("Success create data");
      }

      setFormData({
        MessageService: serviceId,
        MessageContent: "",
        MessageUser: 0,
      });
      window.location.reload();
    } catch (error) {
      console.log("Failed to send message");
    }
  };
  return (
    <div className="border border-black">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full h-32 rounded-lg border border-gray-200 px-4 py-3 text-sm shadow-sm text-black"
          name="MessageContent"
          placeholder="Send message to customer"
          cols={10}
          rows={10}
          id="MessageContent"
          value={formData.MessageContent}
          onChange={handleChange}
        ></textarea>
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-56 inline-block rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageForms;
