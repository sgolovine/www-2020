import React, { createContext } from "react";
import { ProviderProps, ResumeSections } from "~/model";
import contactInfoData from "@data/resume/contact-info.json";
import educationData from "@data/resume/education.json";
import sideProjectsData from "@data/resume/side-projects.json";
import skillsData from "@data/resume/skills.json";
import workExperienceData from "@data/resume/work-experience.json";

const contextValue: ResumeSections = {
  skills: skillsData.skills,
  contactInfo: contactInfoData.contactInfo,
  education: educationData.education,
  sideProjects: sideProjectsData.sideProjects,
  workExperience: workExperienceData.workExperience,
};

export const resumeContext = createContext<ResumeSections>(contextValue);

export const ResumeContextProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  return (
    <resumeContext.Provider value={contextValue}>
      {children}
    </resumeContext.Provider>
  );
};

export default resumeContext;
