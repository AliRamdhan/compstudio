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
} from "@/laduny/helpers/chat-service";

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
                <ModalBody pb={6}>
                  <Container
                    maxW="4xl"
                    color="black"
                    className="border border-black"
                  >
                    {messages.map((message, index) => (
                      <Box
                        padding="2"
                        color="black"
                        maxW="4xl"
                        mt="2"
                        mb="2"
                        display={`flex`}
                        flexDirection={`column`}
                        justifyContent={
                          message.User.roleuser == 1 ? `start` : `end`
                        }
                        alignItems={
                          message.User.roleuser == 1 ? `start` : `end`
                        }
                      >
                        <Box
                          as="span"
                          maxW="xl"
                          bg={`gray.400`}
                          padding={`2`}
                          rounded={`lg`}
                          color={
                            message.User.roleuser == 1 ? `gray.600` : `gray.800`
                          }
                          fontSize="sm"
                        >
                          {message.MessageContent}
                        </Box>
                        <Box
                          as="span"
                          color={
                            message.User.roleuser == 1 ? `gray.600` : `gray.800`
                          }
                          fontSize="sm"
                        >
                          {message.User.username}
                        </Box>
                      </Box>
                    ))}
                  </Container>
                </ModalBody>

                <ModalFooter display={`flex`} flexDirection={`column`}>
                  <FormControl mt={4}>
                    <FormLabel>Send Message</FormLabel>
                    <Textarea
                      value={formData.MessageContent}
                      onChange={handleChange}
                      name="MessageContent"
                      placeholder="Type your message"
                    />
                  </FormControl>
                  <Box mt={4} className="w-full flex justify-end items-center">
                    <Button
                      colorScheme="blue"
                      mr={3}
                      type="submit"
                      className="w-44 px-2"
                    >
                      Send
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </Box>
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
