import { navLinks } from "./data";

// set typing as specific section name
export type SectionName = (typeof navLinks)[number]["name"];

// set typing for experience components
export type ExperienceComponentType = {
  title: string;
  organisation: string;
  description: string;
  date: string;
  location: string;
  icon: React.FunctionComponentElement<any>;
};
