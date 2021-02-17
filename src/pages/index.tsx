import React, { useContext } from "react";
import ContentContainer from "~/components/home/ContentContainer";
import ProfilePicture from "~/components/home/ProfilePicture";
import ProjectItem from "~/components/home/ProjectItem";
import SectionContainer from "~/components/home/SectionContainer";
import SiteContext from "~/context/SiteContext";

const HomePage = () => {
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
    </div>
  );
};

// ts-prune-ignore-next
export default HomePage;
