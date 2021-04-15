type ContactInfoKeys = "phone" | "email" | "website" | "linkedin" | "github";

export type ContactInfo = {
  [K in ContactInfoKeys]: string;
};

export type Education = {
  name: string;
  degree: string;
  gradDate: string;
}[];

export type SideProjects = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  link?: string;
  type: string;
}[];

export type WorkExperience = {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  url: string;
  accomplishments: string[];
}[];

export type ResumeSections = {
  skills: string[];
  contactInfo: ContactInfo;
  education: Education;
  sideProjects: SideProjects;
  workExperience: WorkExperience;
};
