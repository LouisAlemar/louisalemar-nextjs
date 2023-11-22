import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const testimonials = await prisma.testimonial.findMany()

  return new Response(JSON.stringify(testimonials));
}
