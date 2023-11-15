import * as fs from "fs";
import * as util from "node:util";
import * as path from "node:path";
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

export async function GET(request: Request) {
  // const posts = await prisma.post.findMany({
  //   where: { published: true }
  // })

  const readFile = util.promisify(fs.readFile);

  const pathToFile = path.resolve(
    __dirname,
    "../../../../src/app/data/data.json"
  );

  const projectsData = await readFile(pathToFile, "utf8");

  return new Response(projectsData);
}
