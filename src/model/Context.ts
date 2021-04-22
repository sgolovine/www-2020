type ContactInfoTypes = "phone" | "email";

export type SiteProject = {
  name: string;
  desc: string;
  href: string;
};

export type SiteContext = {
  bio: string;
  links: {
    name: string;
    value: string;
    key: string;
    type: string;
  }[];
  contactInfo: {
    [K in ContactInfoTypes]: string;
  };
  projects: SiteProject[];
};
