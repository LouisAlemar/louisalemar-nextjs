"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { getPortfolioItems } from "@/redux/features/portfolio/portfolioSlice";
import { selectAll } from "@/redux/features/projects/projectsSlice";
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
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <main className="flex flex-col items-center justify-between p-10 pt-24">
        <h1 className="text-5xl mb-9">Projects</h1>

        {allProjects.map((project: Project) => {
          return (
            <ProjectComponent key={project.projectId} id={project.projectId} />
          );
        })}

      </main>
    </motion.div>
  );
}
