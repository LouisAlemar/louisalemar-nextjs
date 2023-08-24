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
    <div>
      {project && (
        <div>
          <h1>{project.name}</h1>
          <h2>{project.description}</h2>
          <h3>{project.url}</h3>
        </div>
      )}
    </div>
  );
};

export default ProjectComponent;
