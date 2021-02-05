type LinkTypes = "github" | "instagram" | "linkedin" | "twitter" | "dev";

export type SiteProject = {
  name: string;
  desc: string;
  links?: {
    name: string;
    href: string;
  }[];
};

export type SiteContext = {
  headline: string;
  bio: string;
  links: {
    [K in LinkTypes]: string;
  };
  projects: SiteProject[];
};
