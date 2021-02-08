import path from "path";
import { promises as fs } from "fs";
import React, { useContext, useEffect } from "react";
import { OutboundLink } from "~/components/resume/OutboundLink";
import { PrintEducationSection } from "~/components/resume/print/PrintEducationSection";
import { PrintHeader } from "~/components/resume/print/PrintHeader";
import { PrintLayout } from "~/components/resume/print/PrintLayout";
import { PrintSectionLayout } from "~/components/resume/print/PrintSectionLayout";
import { PrintSideProjectsSection } from "~/components/resume/print/PrintSideProjectsSection";
import { PrintSkillsSection } from "~/components/resume/print/PrintSkillsSection";
import { PrintWorkExperienceSection } from "~/components/resume/print/PrintWorkExperienceSection";
import { ResumeSections } from "~/model/Resume";
import resumeContext from "~/context/ResumeContext";

type Props = {
  sections: ResumeSections;
};

const PrintPage: React.FC<Props> = ({ sections }) => {
  const context = useContext<ResumeSections>(resumeContext);

  useEffect(() => {
    setTimeout(() => {
      window.print();
    }, 1000);
  }, []);

  return (
    <PrintLayout>
      <PrintHeader contactInfo={context.contactInfo} />
      <PrintSectionLayout>
        <PrintSkillsSection skills={context.skills} />
      </PrintSectionLayout>
      <PrintSectionLayout>
        <PrintWorkExperienceSection workExperience={context.workExperience} />
      </PrintSectionLayout>
      <PrintSectionLayout>
        <PrintSideProjectsSection sideProjects={context.sideProjects} />
      </PrintSectionLayout>
      <PrintSectionLayout>
        <PrintEducationSection education={context.education} />
      </PrintSectionLayout>
      <div className="flex flex-row justify-center">
        <OutboundLink
          className="text-sm"
          name="https://resume.glvn.co"
          href="https://resume.glvn.co/"
        />
      </div>
    </PrintLayout>
  );
};

export default PrintPage;
