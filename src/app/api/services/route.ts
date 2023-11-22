import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const services = await prisma.service.findMany()

  return new Response(JSON.stringify(services));
}
