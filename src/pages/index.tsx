import React, { useContext, useEffect } from "react";
import { ProjectCard } from "~/components/ProjectCard";
import { Section } from "~/components/Section";
import { Header, Text } from "~/components/Typography";
import { SiteContext } from "~/context";
import { useAnalytics } from "~/hooks/useAnalytics";

const IndexPage = () => {
  const siteContext = useContext(SiteContext);

  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView({
      title: "Home Page",
    });
  }, []);

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
