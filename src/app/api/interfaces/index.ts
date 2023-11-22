export type Service = {
  id: number;
  name: string;
  description: string
  icon: string;
  keyFeatures: string[]
}

export type Project = {
  id: number;
  name: string;
  description: string;
  url: string;
  logo: string;
  bgImage: string;
  technologies: string[];
};

export type Testimonial = {
  id: number;
  name: string;
  jobTitle: string;
  company: string;
  image: string;
  text: string;
}

