import { Icons } from "~/components/links/LinkButton";

export type LinksContextValue = {
  name: string;
  bio: string;
  location: {
    label: string;
    link: string;
  };
  email: string;
  phone: string;
  links: {
    name: string;
    href: string;
    key: Icons;
  }[];
  vcard: {
    firstName: string;
    lastName: string;
    workPhone: string;
    url: string;
  };
};
