import React from "react";
import { SiteProject } from "~/model/Context";

const ProjectItem: React.FC<SiteProject> = ({ name, desc, links }) => {
  return (
    <div className="my-4 border p-3 shadow-sm rounded hover:shadow">
      <h3 className="text-xl my-1">{name}</h3>
      <p>{desc}</p>
      {!!links && (
        <div className="mt-1">
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

export default ProjectItem;
