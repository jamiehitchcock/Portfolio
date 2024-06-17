import { navLinks } from "./data";

// set typing as specific section name
export type SectionName = (typeof navLinks)[number]["name"];
