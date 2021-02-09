import { useRouter } from "next/router";
import React from "react";
import { ArrowLeft } from "~/components/icons/ArrowLeft";
import Layout from "~/components/links/Layout";
import useContactForm from "~/hooks/useContactForm";

const LinksContactPage = () => {
  const router = useRouter();

  const {
    form,
    // TODO: Add error and exceptions
    // messageState,
    handleSubmit,
    handleClear,
    setFormField,
  } = useContactForm();

  const handleGoBack = () => router.back();

  return (
    <Layout>
      <div>
        <div className="flex flex-row">
          <button onClick={handleGoBack} className="pr-4">
            <ArrowLeft />
          </button>
          <h1 className="text-lg font-bold">Send me a message</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-sm font-bold my-2">Your Name</label>
            <input
              value={form.name}
              onChange={(e) => setFormField("name", e.target.value)}
              placeholder="John Doe"
              type="text"
              className="py-3 border rounded-md shadow-md px-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold my-2">Your Email</label>
            <input
              placeholder="jdoe@gmail.com"
              value={form.email}
              onChange={(e) => setFormField("email", e.target.value)}
              type="email"
              className="py-3 border rounded-md shadow-md px-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold my-2">Message</label>
            <textarea
              placeholder="Hey Sunny!"
              rows={10}
              value={form.message}
              onChange={(e) => setFormField("message", e.target.value)}
              className="p-2 border rounded-md shadow-md resize-none"
            />
          </div>
          <div className="flex flex-col">
            <button
              onClick={handleSubmit}
              className="p-4 my-2 bg-green-400 shadow-md rounded-md"
            >
              <p className="text-gray-800 font-bold">Send Message</p>
            </button>
            <button
              onClick={handleClear}
              className="p-4 my-2 bg-red-400 shadow-md rounded-md"
            >
              <p className="text-gray-800 font-bold">Clear</p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LinksContactPage;
