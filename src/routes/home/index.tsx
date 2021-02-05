import React, { useContext } from "react";
import ContentContainer from "~/components/home/ContentContainer";
import ProfilePicture from "~/components/home/ProfllePicture";
import ProjectItem from "~/components/home/ProjectItem";
import SectionContainer from "~/components/home/SectionContainer";
import ContactForm from "~/components/home/ContactForm";
import SiteContext from "~/context/SiteContext";

export default () => {
  const siteContext = useContext(SiteContext);
  const { headline, bio, projects, links } = siteContext;

  return (
    <div>
      <ProfilePicture headline={headline} />
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
          <p>
            Check out all of my projects on my{" "}
            <a className="text-blue-600 hover:underline" href={links.github}>
              Github Page
            </a>
          </p>
        </ContentContainer>
      </SectionContainer>
      <SectionContainer>
        <h2 className="text-2xl">Get in Touch</h2>
        <ContactForm />
        <ContentContainer>
          <p>
            If you would like to get in touch you can find me on{" "}
            <a className="text-blue-600 hover:underline" href={links.linkedin}>
              Linkedin
            </a>{" "}
            or you can send me an email at{" "}
            <a
              className="text-blue-600 hover:underline"
              href={`mailto:${links.email}`}
            >
              sunny@glvn.co
            </a>
          </p>
        </ContentContainer>
      </SectionContainer>
    </div>
  );
};
