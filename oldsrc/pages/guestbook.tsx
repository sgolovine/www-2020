import React from "react";
import PageHeader from "~/components/common/PageHeader";
import Layout from "~/components/site/Layout";
import useGuestbook from "~/hooks/useGuestbook";

const GuestbookPage = () => {
  const {
    message,
    updateMessage,
    submitMessage,
    guestbookLoading,
    guestbookState,
    parsedGuestbookData,
    showError,
    errorMessage,
  } = useGuestbook();
  return (
    <Layout>
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
          maxLength={160}
        />
        <p className="text-sm">{message.length}/160</p>
        {showError && <p className="text-sm text-red-500">{errorMessage}</p>}
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
        <div className="flex flex-col flex-wrap">
          {guestbookLoading ? (
            <pre>Loading...</pre>
          ) : (
            parsedGuestbookData.map((item, index) => {
              return (
                <div className="border p-3 my-2 hover:shadow rounded">
                  <p className="mb-4" key={`gb-item-${index}-${item[0]}`}>
                    {item}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </Layout>
  );
};

// ts-prune-ignore-next
export default GuestbookPage;
