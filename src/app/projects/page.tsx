"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

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
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <main className="flex flex-col items-center justify-between">
        {allProjects.map((project: Project) => {
          return (
            <ProjectComponent key={project.projectId} id={project.projectId} />
          );
        })}
      </main>
    </motion.div>
  );
}
