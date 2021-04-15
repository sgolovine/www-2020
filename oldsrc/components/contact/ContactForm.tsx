import React, { Children, ReactNode } from "react";
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

  const renderStatus = () => {
    return (
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
    );
  };

  const Section = ({
    label,
    children,
  }: {
    label: string;
    children: ReactNode;
  }) => {
    return (
      <div className="flex flex-col p-2">
        <label className="text-sm font-bold">{label}</label>
        {children}
      </div>
    );
  };

  return (
    <div className="w-full sm:w-initial">
      {renderStatus()}
      <Section label="Your Name">
        <input
          value={form.name}
          onChange={(e) => setFormField("name", e.target.value)}
          placeholder="John Doe"
          className="border rounded p-2 max-w-lg"
        />
      </Section>
      <Section label="Your Email">
        <input
          placeholder="johndoe@gmail.com"
          className="border rounded p-2 max-w-lg"
          value={form.email}
          onChange={(e) => setFormField("email", e.target.value)}
        />
      </Section>
      <Section label="Message">
        <textarea
          value={form.message}
          onChange={(e) => setFormField("message", e.target.value)}
          placeholder="Hey Sunny..."
          className="border rounded p-2 max-w-lg"
          rows={7}
        />
      </Section>
      <div className="p-2 flex flex-col sm:flex-row">
        <button
          onClick={handleSubmit}
          className="p-2 bg-blue-500 sm:w-36 rounded text-white font-bold sm:mr-1 my-2 sm:my-initial"
        >
          Send
        </button>
        <button
          onClick={handleClear}
          className="p-2 bg-red-500 sm:w-36 rounded text-white font-bold sm:ml-1 my-2 sm:my-initial"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
