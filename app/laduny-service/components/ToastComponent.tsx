"use client"
import React from "react";
import { useToast } from "@chakra-ui/react";

const ToastComponent = () => {
  const toast = useToast();

  const successToast = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const failedToast = () => {
    toast({
      title: "Account creation failed.",
      description: "Sorry, we couldn't create your account.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  return { successToast, failedToast };
};

export default ToastComponent;
