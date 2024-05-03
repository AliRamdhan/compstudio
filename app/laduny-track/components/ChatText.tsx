"use client";
import React, {
  useRef,
  useState,
  FormEvent,
  ChangeEvent,
  useEffect,
} from "react";
import { IoChatbubbles } from "react-icons/io5";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Container,
  Box,
} from "@chakra-ui/react";
import { Message, MessageForm } from "@/laduny/commont.type";
import {
  CreateMessage,
  GetAllChatsByServiceId,
} from "../../../helpers/chat-service";

const ChatText = ({ serviceId }: { serviceId: number }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState<MessageForm>({
    MessageService: serviceId,
    MessageContent: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await CreateMessage(formData);
      if (response) {
        alert("Success create data");
      }
      setError(null);
      setFormData({
        MessageService: serviceId,
        MessageContent: "",
      });
    } catch (error) {
      setError("Failed to create service");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const messages = await GetAllChatsByServiceId(serviceId);
        console.log(messages);
        setMessages(messages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <button>
        <IoChatbubbles className="w-16 h-16 text-gray-600" onClick={onOpen} />
      </button>
      <div className="w-full">
        <div className="w-4/5">
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={"4xl"}
            scrollBehavior={`inside`}
          >
            <ModalOverlay
              bg="none"
              backdropFilter="auto"
              backdropInvert="80%"
              backdropBlur="2px"
            />
            <form onSubmit={handleSubmit}>
              <ModalContent>
                <ModalHeader color="black">Chat Admin</ModalHeader>
                <ModalCloseButton color="black" size={`xl`} mt={`4`} mr={`8`} />
                <ModalBody pb={6} color="black">
                  <Container maxW="4xl" centerContent>
                    {messages.map((message, index) => (
                      <Box
                        padding="4"
                        bg="gray.400"
                        color="black"
                        maxW="4xl"
                        mt="2"
                        mb="2"
                        display={`flex`}
                        justifyContent={`end`}
                      >
                        <Box
                          as="span"
                          color="gray.600"
                          fontSize="sm"
                        >
                          {message.MessageContent}
                        </Box>
                      </Box>
                    ))}
                  </Container>
                  <FormControl mt={4}>
                    <FormLabel>Send Message</FormLabel>
                    <Textarea
                      value={formData.MessageContent}
                      onChange={handleChange}
                      name="MessageContent"
                      placeholder="Type your message"
                    />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} type="submit">
                    Send
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ChatText;
