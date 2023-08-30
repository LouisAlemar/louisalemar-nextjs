import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  selectIds,
  selectEntities,
  selectById,
  selectTotal,
  selectAll,
} from "@/redux/features/projects/projectsSlice";

import Image from "next/image";


const ProjectComponent = ({ id }: { id: number }) => {
  const project = useSelector((state: RootState) => selectById(state, id));


  if (project) {
    if (id % 2 == 0) {
      return (
        <>
          <div className="project-item mb-6 sm:mb-3 flex items-center w-full flex-col-reverse sm:flex-row">
            <div className="project-info sm:w-6/12 w-full sm:pr-5">
              <h1 className="text-1xl sm:text-2xl my-2 text-blue font-roboto">{project.name}</h1>
              <p className="text-sm mb-2 sm:mb-5">{project.description}</p>
              <button className="bg-blue hover:bg-green text-white font-bold py-2 px-4 rounded font-roboto-condensed">
                <a href={project.url} target="_blank">Visit Website</a>
              </button>
            </div>
            <div className="image-container sm:w-6/12 w-full">
              <Image
                className="drop-shadow-md"
                src={`/images/${project.image}`}
                alt={project.name}
                width={1000}
                height={1000}
                priority={true}
              />
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="project-item mb-6 sm:mb-3 flex items-center w-full flex-col sm:flex-row">
            <div className="image-container sm:w-6/12 w-full">
              <Image
                className="drop-shadow-md"
                src={`/images/${project.image}`}
                alt={project.name}
                width={1000}
                height={1000}
                priority={true}
              />
            </div>
            <div className="project-info sm:w-6/12 w-full sm:pl-5">
              <h1 className="text-1xl sm:text-2xl my-2 text-blue font-roboto">{project.name}</h1>
              <p className="text-sm mb-2 sm:mb-5">{project.description}</p>
              <button className="bg-blue hover:bg-green text-white font-bold py-2 px-4 rounded font-roboto-condensed">
                <a href={project.url} target="_blank">Visit Website</a>
              </button>
            </div>
          </div>
        </>
      )
    }
  }
};

export default ProjectComponent;
