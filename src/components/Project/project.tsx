import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  selectIds,
  selectEntities,
  selectById,
  selectTotal,
  selectAll,
} from "@/redux/features/projects/projectsSlice";

const ProjectComponent = ({ id }: { id: number }) => {
  const project = useSelector((state: RootState) => selectById(state, id));

  return (
    <>
      {project && (
        <div className="project-item mb-6">
          <h1>{project.name}</h1>
          <h2>{project.description}</h2>
          <a href={project.url} target="_blank">Visit Website</a>
        </div>
      )}
    </>
  );
};

export default ProjectComponent;
