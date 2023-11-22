import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const projects = [
  {
    name: "Salesforce Stakeholder Impact Report",
    description: "A yearly report for Stakeholders.",
    url: "https://stakeholderimpactreport.salesforce.com/",
    logo: "salesforce-logo.png",
    bgImage: "salesforce-bg.jpg"
  },
  {
    name: "Noddle Companies",
    description: "The Noddle Companies is a full service strategic development partner which can provide their clients with assistance in site selection, acquisition master planning, architect and contractor selections and contract negotiation, zoning, infrastructure installation, tax incentives, construction management and more.",
    url: "https://www.noddlecompanies.com/",
    logo: "noddle-logo.jpeg",
    bgImage: "noddle-bg.jpg"
  },
  {
    name: "Iannelli Construction",
    description: "An informational website for a construction company.",
    url: "http://www.iannelliconstruction.com/",
    logo: "iannelli-logo.png",
    bgImage: "iannelli-bg.jpg"
  }
]

export const seedProjects = async () => {
  try {
    for (const { name, description, url, logo, bgImage } of projects) {
      await prisma.project.create({
        data: {
          name,
          description,
          url,
          logo,
          bgImage,
        }
      })
    }
  } catch (error) {
    console.error("Error seeding projects:", error);
  }
};