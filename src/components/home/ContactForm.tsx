import React from "react";
import useContactForm from "~/hooks/useContactForm";
import CheckCircle from "../icons/CheckCircle";
import ErrorCircle from "../icons/ErrorCircle";

const ContactForm = () => {
  const {
    form,
    messageState,
    handleSubmit,
    handleClear,
    setFormField,
  } = useContactForm();

  return (
    <div>
      <div className="flex flex-col p-2">
        <div className="h-6">
          {messageState.show && (
            <div className="flex flex-row">
              <div className="w-5">
                {messageState.type === "success" ? (
                  <CheckCircle />
                ) : (
                  <ErrorCircle />
                )}
              </div>
              <p
                className={`ml-1 text-sm font-bold ${
                  messageState.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {messageState.message}
              </p>
            </div>
          )}
        </div>
        <label className="text-sm font-bold">Your Name</label>
        <input
          value={form.name}
          onChange={(e) => setFormField("name", e.target.value)}
          placeholder="John Doe"
          className="border rounded p-2 max-w-lg"
        />
      </div>
      <div className="flex flex-col p-2">
        <label className="text-sm font-bold">Your Email</label>
        <input
          placeholder="johndoe@gmail.com"
          className="border rounded p-2 max-w-lg"
          value={form.email}
          onChange={(e) => setFormField("email", e.target.value)}
        />
      </div>
      <div className="flex flex-col p-2">
        <label className="text-sm font-bold">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setFormField("message", e.target.value)}
          placeholder="Hey Sunny..."
          className="border rounded p-2 max-w-lg"
          rows={7}
          cols={50}
        />
      </div>
      <div className="p-3 flex flex-row">
        <button
          onClick={handleSubmit}
          className="p-2 bg-blue-500 w-32 rounded text-white font-bold mr-1"
        >
          Send
        </button>
        <button
          onClick={handleClear}
          className="p-2 bg-red-500 w-32 rounded text-white font-bold ml-1"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
