import axios from "axios";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

const useGuestbook = () => {
  const [message, setMessage] = useState<string>("");
  const [shouldFetchGuestbook, setShouldFetchGuestbook] = useState<boolean>(
    true
  );
  const [guestbookLoading, setGuestbookLoading] = useState<boolean>(false);
  const [guestbookData, setGuestbookData] = useState<string>("");

  const [guestbookState, setGuestbookState] = useState<
    "pre" | "submitting" | "post"
  >("pre");

  useEffect(() => {
    if (shouldFetchGuestbook) {
      setShouldFetchGuestbook(false);
      setGuestbookLoading(true);
      axios
        .get(
          `https://api.github.com/gists/${process.env.NEXT_PUBLIC_GUESTBOOK_GIST_ID}`
        )
        .then((resp) => {
          setGuestbookLoading(false);
          setGuestbookData(
            resp.data.files[
              process.env.NEXT_PUBLIC_GUESTBOOK_FILENAME as string
            ].content
          );
        });
    }
  }, [shouldFetchGuestbook]);

  const updateMessage = (newMessage: string) => setMessage(newMessage);

  const submitMessage = async () => {
    setGuestbookState("submitting");
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
    if (resp.status === 201) {
      setGuestbookState("post");
      setShouldFetchGuestbook(true);
    }
  };

  return {
    guestbookState,
    message,
    updateMessage,
    submitMessage,
    guestbookData,
    guestbookLoading,
  };
};

export default useGuestbook;
