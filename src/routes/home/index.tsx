import React, { useContext } from "react";
import SiteContext from "~/context/SiteContext";
import { SiteProject } from "~/model/Context";

const ProjectItem: React.FC<SiteProject> = ({ name, desc, links }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{desc}</p>
      {!!links && (
        <div>
          {links.map((link, index) => (
            <a key={index} href={link.href}>
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
      <h1>{headline}</h1>
      <div>
        <h2>About Me</h2>
        <div>
          <p>{bio}</p>
        </div>
      </div>
      <div>
        <h2>My Projects</h2>
        {projects.map((project, index) => {
          return <ProjectItem key={index} {...project} />;
        })}
      </div>
      <div>
        <h2>Get in Touch</h2>
        <p>
          If you would like to get in touch you can find me on{" "}
          <a href="#">Linkedin</a> or you can send me an email at{" "}
          <a href="#">sunny@glvn.co</a>
        </p>
      </div>
    </div>
  );
};
