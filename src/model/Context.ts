export type SocialLinkTypes =
  | "github"
  | "instagram"
  | "linkedin"
  | "twitter"
  | "dev";

export type ContactInfoTypes = "phone" | "email";

export type SiteProject = {
  name: string;
  desc: string;
  links?: {
    name: string;
    href: string;
  }[];
};

export type ContextRoute = {
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
  navigation: {
    prodRoutes: ContextRoute[];
    devRoutes: ContextRoute[];
  };
};
