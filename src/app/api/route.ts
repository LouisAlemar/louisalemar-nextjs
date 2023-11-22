import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const services = await prisma.service.findMany()
  const projects = await prisma.project.findMany()
  const testimonials = await prisma.testimonial.findMany()

  const allData = { services, projects, testimonials }

  return new Response(JSON.stringify(allData));
}
