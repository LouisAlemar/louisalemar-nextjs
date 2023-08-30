export type Project = {
  projectId: number;
  name: string;
  description: string;
  url: string;
  image: string;
  technologies: string[];
};

export type Tech = {
  type: string;
  technology: string[];
};
