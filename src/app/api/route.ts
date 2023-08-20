import * as fs from "fs";
import * as util from "node:util";
import * as path from "node:path";

export async function GET(request: Request) {
  const readFile = util.promisify(fs.readFile);

  const pathToFile = path.resolve(
    __dirname,
    "../../../../src/app/data/projects.json"
  );

  const projectsData = await readFile(pathToFile, "utf8");

  return new Response(projectsData);
}
