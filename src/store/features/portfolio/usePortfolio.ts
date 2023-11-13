import useProjects from "../projects/useProjects";
import useTech from "../tech/useTech";

const usePortfolio = () => {
  const projects = useProjects();
  const tech = useTech();
  return {
    ...projects,
    ...tech,
  };
};

export default usePortfolio;
