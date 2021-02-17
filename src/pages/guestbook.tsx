import React from "react";
import PageHeader from "~/components/common/PageHeader";
import useGuestbook from "~/hooks/useGuestbook";

const GuestbookPage = () => {
  const {
    message,
    updateMessage,
    submitMessage,
    guestbookData,
    guestbookLoading,
    guestbookState,
  } = useGuestbook();
  return (
    <>
      <PageHeader headerText="Guestbook" />
      <p>
        {guestbookState === "post"
          ? "Thank you for signing the guestbook"
          : "Sign the guestbook!"}
      </p>
      <div className="py-4 flex flex-col">
        <textarea
          value={message}
          onChange={(e) => updateMessage(e.target.value)}
          placeholder="Your message"
          className="border rounded p-2 w-full"
        />
        <div className="flex flex-row justify-end my-2">
          {guestbookState !== "post" && (
            <button
              className="border px-6 py-2 rounded bg-blue-500"
              onClick={submitMessage}
            >
              <p className="font-bold text-white">
                {guestbookState === "submitting" ? "Loading..." : "Sign"}
              </p>
            </button>
          )}
        </div>
        <hr className="my-6" />
        <div>
          {guestbookLoading ? (
            <pre>Loading...</pre>
          ) : (
            <pre>{guestbookData}</pre>
          )}
        </div>
      </div>
    </>
  );
};

export default GuestbookPage;