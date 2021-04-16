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
  links?: {
    name: string;
    href: string;
  }[];
};

type ContextRoute = {
  name: string;
  path: string;
};

export type SiteContext = {
  headline: string;
  bio: string;
  links: {
    [K in SocialLinkTypes]: string;
  };
  contactInfo: {
    [K in ContactInfoTypes]: string;
  };
  projects: SiteProject[];
  navigation: ContextRoute[];
};
