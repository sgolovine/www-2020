import { useRouter } from "next/router";
import React from "react";
import { Button } from "../Button";
import { Header } from "../Typography";
// import Download from "../icons/Download";
// import Print from "../icons/Print";

const ResumePageHeader = () => {
  const router = useRouter();

  const handlePrint = () => router.push("/resume/print");

  const handleDownload = () => router.push("/doc/resume.pdf");

  return (
    <div className="flex flex-row justify-between items-center">
      <Header>Resume</Header>
      <Button title="Download PDF" onClick={handleDownload} />
    </div>
  );
};

export default ResumePageHeader;
