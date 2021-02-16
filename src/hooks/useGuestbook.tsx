import axios from "axios";
import DOMPurify from "dompurify";
import { useState } from "react";

const useGuestbook = () => {
  const [message, setMessage] = useState<string>("");

  const updateMessage = (newMessage: string) => setMessage(newMessage);

  const submitMessage = async () => {
    const sanitized = DOMPurify.sanitize(message);
    // Submit the message here
    const resp = await axios({
      method: "POST",
      url: "/.netlify/functions/updateGuestbook",
      validateStatus: (status) => {
        return status >= 200 && status < 401;
      },
      data: {
        userMessage: sanitized,
      },
    });

    console.log("submitted successfully", resp);
  };

  return {
    message,
    updateMessage,
    submitMessage,
  };
};

export default useGuestbook;
