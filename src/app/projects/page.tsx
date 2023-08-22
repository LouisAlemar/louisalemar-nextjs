"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Nav from "../../components/navigation";
import { fetchProjects } from "@/redux/features/projects/projectsSlice";
import { projectSelectors } from "@/redux/features/projects/projectsSlice";
import { AppDispatch } from "../../redux/store";
import { Project } from "@/app/api/interfaces/index";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const allProjects: Project[] = useSelector(projectSelectors.selectAll);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Nav />

      {allProjects.map((project: Project) => {
        return <div key={project.projectId}>{project.name}</div>;
      })}
    </main>
  );
}
