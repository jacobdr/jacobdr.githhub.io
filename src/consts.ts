import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Jacobdr",
  EMAIL: "jacobdr@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Homepage",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of my thoughts on various topics",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/jacobdr",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/jacob-roberts-293a2228",
  },
];
