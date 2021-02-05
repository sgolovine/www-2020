import React from "react";

const ContactForm = () => {
  const handleSubmit = () => {};

  const handleClear = () => {};

  return (
    <div>
      <div className="flex flex-col p-2 self-center">
        <label className="text-sm font-bold">Your Name</label>
        <input placeholder="John Doe" className="border rounded p-2 max-w-lg" />
      </div>
      <div className="flex flex-col p-2">
        <label className="text-sm font-bold">Your Email</label>
        <input
          placeholder="johndoe@gmail.com"
          className="border rounded p-2 max-w-lg"
        />
      </div>
      <div className="flex flex-col p-2">
        <label className="text-sm font-bold">Message</label>
        <textarea
          placeholder="Hey Sunny..."
          className="border rounded p-2 max-w-lg"
          rows={7}
          cols={50}
        />
      </div>
      <div className="p-3 flex flex-row">
        <button className="p-2 bg-blue-500 w-32 rounded text-white font-bold mr-1">
          Send
        </button>
        <button className="p-2 bg-red-500 w-32 rounded text-white font-bold ml-1">
          Clear
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
