export type SocialLinkTypes =
  | "github"
  | "instagram"
  | "linkedin"
  | "twitter"
  | "dev";

type ContactInfoTypes = "phone" | "email";

export type SiteProject = {
  name: string;
  desc: string;
  href: string;
};

export type SiteContext = {
  bio: string;
  links: {
    [K in SocialLinkTypes]: string;
  };
  contactInfo: {
    [K in ContactInfoTypes]: string;
  };
  projects: SiteProject[];
};
