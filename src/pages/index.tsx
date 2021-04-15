import React, { useContext } from "react";
import { ProjectCard } from "~/components/ProjectCard";
import { Section } from "~/components/Section";
import { Header, Text } from "~/components/Typography";
import { SiteContext } from "~/context";

const IndexPage = () => {
  const siteContext = useContext(SiteContext);

  console.log(siteContext);
  return (
    <>
      <Section>
        <Header>About Me</Header>
        <Text>{siteContext.bio}</Text>
      </Section>
      <Section>
        <Header>Recent Projects</Header>
        {siteContext.projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </Section>
    </>
  );
};

export default IndexPage;
