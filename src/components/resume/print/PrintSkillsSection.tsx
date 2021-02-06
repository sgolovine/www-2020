import React from "react";
import { PrintSectionHeader } from "../SectionHeader";

type Props = {
  skills: string[];
};

export const PrintSkillsSection: React.FC<Props> = ({ skills }) => {
  return (
    <div>
      <div className="flex flex-row justify-center">
        <PrintSectionHeader>Core Qualifications</PrintSectionHeader>
      </div>
      {skills.map((skill, i) => {
        return (
          <p className="my-4 text-sm" key={i}>
            {skill}
          </p>
        );
      })}
    </div>
  );
};
