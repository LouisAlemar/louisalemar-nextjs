import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { selectAll, getJobs } from "./projectsSlice";

const useProjects = () => {
  const _projects = useSelector(selectAll);
  const dispatch = useDispatch<AppDispatch>();

  const _fetchProjects = useCallback(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return {
    projects: _projects,
    fetchProjects: _fetchProjects,
  };
};

export default useProjects;
