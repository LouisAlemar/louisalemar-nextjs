import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const projects = await prisma.project.findMany()

  return new Response(JSON.stringify(projects));
}
