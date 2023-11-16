export interface AllData {
  services: Service[],
  projects: Project[],
  tech: Tech[]
}

export type Service = {
  serviceId: number;
  name: string;
  description: string
  icon: string;
  keyFeatures: string[]
}

export type Project = {
  projectId: number;
  name: string;
  description: string;
  url: string;
  logo: string;
  bgImage: string;
  technologies: string[];
};

export type Testimonial = {
  testimonialId: number;
  name: string;
  jobTitle: string;
  company: string;
  image: string;
  text: string;
}

export type Tech = {
  type: string;
  technology: string[];
};

