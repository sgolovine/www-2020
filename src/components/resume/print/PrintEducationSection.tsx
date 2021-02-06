import React from "react";
import { Education } from "~/model/Resume";
import { PrintSectionHeader } from "../SectionHeader";

type Props = {
  education: Education;
};

type EducationItemProps = {
  name: string;
  degree: string;
  gradDate: string;
};

const EducationItem: React.FC<EducationItemProps> = ({
  name,
  degree,
  gradDate,
}) => {
  return (
    <div className="mb-6">
      <div className="flex flex-row justify-between">
        <p>{name}</p>
        <p className="text-sm">{gradDate}</p>
      </div>
      <div className="m-2">
        <p className="text-sm">{degree}</p>
      </div>
    </div>
  );
};

export const PrintEducationSection: React.FC<Props> = ({ education }) => {
  return (
    <div>
      <div className="flex flex-row justify-center">
        <PrintSectionHeader>Education</PrintSectionHeader>
      </div>
      <div>
        {education.map((item, i) => {
          return (
            <EducationItem
              key={i}
              name={item.name}
              degree={item.degree}
              gradDate={item.gradDate}
            />
          );
        })}
      </div>
    </div>
  );
};
