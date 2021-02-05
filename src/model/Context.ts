type LinkTypes = "github" | "instagram" | "linkedin" | "twitter" | "dev";

export type SiteContext = {
  links: {
    [K in LinkTypes]: string;
  };
  projects: {
    name: string;
    desc: string;
    links?: {
      name: string;
      href: string;
    }[];
  }[];
};
