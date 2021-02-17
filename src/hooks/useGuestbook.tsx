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

  const [parsedGuestbookData, setParsedGuestbookData] = useState<string[]>([]);

  const [guestbookState, setGuestbookState] = useState<
    "pre" | "submitting" | "post"
  >("pre");

  useEffect(() => {
    // Add a date to the end of the URL so axios never caches it.
    const url = `https://api.github.com/gists/${
      process.env.NEXT_PUBLIC_GUESTBOOK_GIST_ID
    }?rand=${new Date().toString()}`;

    if (shouldFetchGuestbook) {
      setShouldFetchGuestbook(false);
      setGuestbookLoading(true);
      axios.get(url).then((resp) => {
        setGuestbookLoading(false);
        setGuestbookData(
          resp.data.files[process.env.NEXT_PUBLIC_GUESTBOOK_FILENAME as string]
            .content
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

  useEffect(() => {
    const splitData = guestbookData.split("\n");
    const withoutLines = splitData.reduce((acc: string[], item: string) => {
      if (item) {
        return [...acc, item];
      }
      return acc;
    }, []);
    setParsedGuestbookData(withoutLines);
  }, [guestbookData]);

  return {
    guestbookState,
    message,
    updateMessage,
    submitMessage,
    guestbookData,
    guestbookLoading,
    parsedGuestbookData,
  };
};

export default useGuestbook;
