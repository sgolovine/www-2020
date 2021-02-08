import { useRouter } from "next/router";
import React from "react";
import Download from "../icons/Download";
import Print from "../icons/Print";

const ResumePageHeader = () => {
  const router = useRouter();

  const handlePrint = () => router.push("/resume/print");

  const handleDownload = () => router.push("/doc/resume.pdf");

  return (
    <div className="pt-6 flex flex-row justify-between">
      <h1 className="text-2xl font-bold">Resume</h1>
      <div className="flex flex-row">
        <button className="w-6 ml-4" onClick={handleDownload}>
          <Download />
        </button>
        <button className="w-6 ml-4" onClick={handlePrint}>
          <Print />
        </button>
      </div>
    </div>
  );
};

export default ResumePageHeader;
