import React from "react";
import { stripHttp } from "~/helpers/stripHttp";
import { WorkExperience } from "~/model/Resume";
import { OutboundLink } from "../OutboundLink";
import { PrintSectionHeader } from "../SectionHeader";

type Props = {
  workExperience: WorkExperience;
};

type WorkExperienceItemProps = {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  accomplishments: string[];
  url: string;
};

export const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  name,
  position,
  startDate,
  endDate,
  accomplishments,
  url,
}) => {
  return (
    <div className="mb-6">
      <div className="flex flex-row justify-between">
        <div>
          <p>{name}</p>
          <p className="text-xs">{position}</p>
        </div>
        <div>
          <div className="flex flex-row">
            <p className="text-sm">{startDate}</p>
            <p className="text-sm">&nbsp;-&nbsp;{endDate}</p>
          </div>
          <OutboundLink href={url} name={stripHttp(url)} className="text-sm" />
        </div>
      </div>
      <ul className="mt-4">
        {accomplishments.map((item, i) => {
          return (
            <li className="mx-4 my-2 text-sm list-disc" key={i}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const PrintWorkExperienceSection: React.FC<Props> = ({
  workExperience,
}) => {
  return (
    <div>
      <div className="flex flex-row justify-center">
        <PrintSectionHeader>Work Experience</PrintSectionHeader>
      </div>
      <div>
        {workExperience.map((item, i) => {
          return (
            <WorkExperienceItem
              key={i}
              name={item.name}
              position={item.position}
              startDate={item.startDate}
              endDate={item.endDate}
              accomplishments={item.accomplishments}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
};
