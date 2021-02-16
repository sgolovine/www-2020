import axios from "axios";
import DOMPurify from "dompurify";
import { useState } from "react";

const useGuestbook = () => {
  const [message, setMessage] = useState<string>("");

  const clearMessage = () => setMessage("");

  const updateMessage = (newMessage: string) => setMessage(newMessage);

  const submitMessage = () => {
    const sanitized = DOMPurify.sanitize(message);
    // Submit the message here
  };

  return {
    message,
    updateMessage,
    submitMessage,
    clearMessage,
  };
};

export default useGuestbook;
