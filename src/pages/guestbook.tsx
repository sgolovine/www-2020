import React from "react";
import PageHeader from "~/components/common/PageHeader";
import useGuestbook from "~/hooks/useGuestbook";

const GuestbookPage = () => {
  const { message, updateMessage, submitMessage } = useGuestbook();
  return (
    <>
      <PageHeader headerText="Guestbook" />
      <p>Sign the guestbook! Just like in 1999</p>
      <div className="py-4 flex flex-col">
        <textarea
          value={message}
          onChange={(e) => updateMessage(e.target.value)}
          placeholder="Your message"
          className="border rounded p-2 w-full"
        />
        <div className="flex flex-row justify-end my-2">
          <button
            className="border px-6 py-2 rounded bg-blue-500"
            onClick={submitMessage}
          >
            <p className="font-bold text-white">Sign</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default GuestbookPage;
