"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Nav from "../../components/Nav/navigation";
import { getPortfolioItems } from "@/redux/features/portfolio/portfolioSlice";
import {
  selectIds,
  selectEntities,
  selectById,
  selectTotal,
  selectAll,
} from "@/redux/features/projects/projectsSlice";
import { AppDispatch } from "../../redux/store";
import { Project } from "@/app/api/interfaces/index";
import ProjectComponent from "@/components/Project/project";
import usePortfolio from "@/redux/features/portfolio/usePortfolio";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const allProjects: Project[] = useSelector(selectAll);
  usePortfolio();

  useEffect(() => {
    dispatch(getPortfolioItems());
  }, []);

  return (
    <main className="flex flex-col items-center justify-between">
      <Nav />

      {allProjects.map((project: Project) => {
        return (
          <ProjectComponent key={project.projectId} id={project.projectId} />
        );
      })}
    </main>
  );
}
