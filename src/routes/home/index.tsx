import React, { ReactNode, useContext } from "react";
import SiteContext from "~/context/SiteContext";
import { SiteProject } from "~/model/Context";

const SectionContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="my-6">{children}</div>;
};

const ContentContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="mx-2 my-1">{children}</div>;
};

const ProjectItem: React.FC<SiteProject> = ({ name, desc, links }) => {
  return (
    <div className="my-4">
      <h3 className="text-xl my-1">{name}</h3>
      <p className="mx-2">{desc}</p>
      {!!links && (
        <div className="mx-2 mt-1">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="mr-4 text-blue-600 hover:underline"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default () => {
  const siteContext = useContext(SiteContext);
  const { headline, bio, projects } = siteContext;

  return (
    <div>
      <h1 className="text-3xl">{headline}</h1>
      <SectionContainer>
        <h2 className="text-2xl">About Me</h2>
        <ContentContainer>
          <p>{bio}</p>
        </ContentContainer>
      </SectionContainer>
      <SectionContainer>
        <h2 className="text-2xl">My Projects</h2>
        <ContentContainer>
          {projects.map((project, index) => {
            return <ProjectItem key={index} {...project} />;
          })}
        </ContentContainer>
      </SectionContainer>
      <SectionContainer>
        <h2 className="text-2xl">Get in Touch</h2>
        <ContentContainer>
          <p>
            If you would like to get in touch you can find me on{" "}
            <a href="#">Linkedin</a> or you can send me an email at{" "}
            <a href="#">sunny@glvn.co</a>
          </p>
        </ContentContainer>
      </SectionContainer>
    </div>
  );
};
