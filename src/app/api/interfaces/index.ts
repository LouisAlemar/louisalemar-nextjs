export type Project = {
  projectId: number;
  name: string;
  description: string;
  url: string;
  technologies: string[];
};

export type Tech = {
  type: string;
  technology: string[];
};
