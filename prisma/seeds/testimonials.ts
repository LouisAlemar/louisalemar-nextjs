import { PrismaClient, type Testimonial } from "@prisma/client";

const prisma = new PrismaClient();

type TestimonialSeed = Omit<Testimonial, "id">

const testimonials: TestimonialSeed[] = [
  {
    name: "Wally Faye",
    jobTitle: "Staff Architect",
    company: "Hype",
    image: "wally.jpeg",
    text: "In the several years that I have had the pleasure of overseeing and mentoring Louis, he has consistently displayed an exceptional caliber of work as a JavaScript software engineer. His meticulous attention to detail is evident in the precision of his code and the scrupulous manner with which he troubleshoots and resolves complex problems. Louis' commitment to collaboration fosters a synergistic environment where each project benefits from his keen ability to harmonize with a team. His thirst for knowledge and improvement is insatiable, always seeking out new technologies and practices with a fervor that is both inspiring and infectious. His contributions are not only a testament to his skills but also to his unwavering dedication to excellence in the evolving landscape of software development."
  },
  {
    name: "Charles Julian Jr.",
    jobTitle: "Senior Front-End Web Developer",
    company: "Launch Interactive",
    image: "charles.jpeg",
    text: "I have worked with Louis at two different companies. Louis is a very hard-working developer that can take a project from concept to completion with very little if any assitance. Louis is well skilled in React and Javascript as well as Typescript and can handle any challenges that may come his way. He is a great asset to have on any team because of his hard work and determination to get the job done quickly and efficiently."
  },
  {
    name: "Adam Scott",
    jobTitle: "Technology Director",
    company: "Launch Interactive",
    image: "adam.jpeg",
    text: "Louis, during his time at Launch, proved to be a talented UI Developer. His work on projects for clients including Salesforce, Splunk, Grammarly and Royal Oak showcased his ability to blend technical skill with a unique design sense. A team player, Louis balanced independence with effective communication and a positive attitude. His growth in both scripting and visual design was notable. I confidently recommend Louis for his professionalism, creativity, and strong work ethic."
  }
]

export const seedTestimonials = async () => {
  try {
    for (const { name, jobTitle, company, image, text } of testimonials) {
      await prisma.testimonial.create({
        data: {
          name,
          jobTitle,
          company,
          image,
          text,
        }
      })
    }
  } catch (error) {
    console.error("Error seeding testimonials:", error);
  }
};