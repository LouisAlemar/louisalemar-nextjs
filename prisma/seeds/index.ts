import { PrismaClient } from '@prisma/client';
import { seedProjects } from './projects';
import { seedServices } from './services';
import { seedTestimonials } from './testimonials';

const prisma = new PrismaClient()

async function main() {
  try {
    await seedServices()
    await seedProjects()
    await seedTestimonials()
  } catch (error) {
    console.error("Error seeding", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })