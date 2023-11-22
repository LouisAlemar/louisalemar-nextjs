import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const services = [
  {

    name: "Web Design",
    description: "My web design service focuses on creating visually stunning and responsive websites, tailored to embody your brand's identity and ensure an exceptional user experience across all devices.",
    keyFeatures: [
      "<strong>Custom Visual Design:</strong><br /> Matching brand identity",
      "<strong>Responsive Layouts:</strong><br /> Adapts to all devices",
      "<strong>User-Friendly Navigation:</strong><br /> For enhanced user experience",
      "<strong>Visual Elements:</strong><br /> High-quality images and animations",
      "<strong>Cross-Browser Compatibility:</strong><br /> Consistent look across browsers"
    ]
  },
  {
    name: "Web Development",
    description: "I provide comprehensive web development solutions, encompassing both front-end and back-end programming, aimed at building secure, high-performing, and SEO-optimized websites.",
    keyFeatures: [
      "<strong>Front-End & Back-End:</strong><br /> Building and managing website functions",
      "<strong>Performance Optimization:</strong><br /> Fast loading times",
      "<strong>Enhanced Security:</strong><br /> Protecting against cyber threats",
      "<strong>SEO Optimized:</strong><br /> Better search engine ranking",
      "<strong>Technical Maintenance:</strong><br /> Regular updates and fixes"
    ]
  },
  {
    name: "Content Creation",
    description: "My content creation expertise spans across crafting SEO-friendly, engaging, and diverse multimedia content, strategically designed to amplify your brand's voice and presence online.",
    keyFeatures: [
      "<strong>SEO-Friendly Writing:</strong><br /> For better online visibility",
      "<strong>Diverse Media Formats:</strong><br /> Blogs, videos, infographics",
      "<strong>Brand Voice Alignment:</strong><br /> Consistent messaging",
      "<strong>Social Media Adaptation:</strong><br /> Platform-specific content",
      "<strong>Content Strategy Planning:</strong><br /> Regular and strategic posting"
    ]
  }
]

export const seedServices = async () => {
  try {
    for (const { name, description, keyFeatures } of services) {
      await prisma.service.create({
        data: {
          name,
          description,
          keyFeatures
        }
      })
    }
  } catch (error) {
    console.error("Error seeding services:", error);
  }
};