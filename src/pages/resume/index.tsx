import React from "react";
import { Button } from "~/components/Button";
import { Section } from "~/components/Section";
import { Header } from "~/components/Typography";

const ResumePage = () => {
  return (
    <>
      <Header>Resume</Header>
      <Section>
        <Button
          title="Download PDF"
          onClick={() => alert("TODO: make this thing work")}
        />
      </Section>
    </>
  );
};

export default ResumePage;
