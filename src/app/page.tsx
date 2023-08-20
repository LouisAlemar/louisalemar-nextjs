"use client";

import { useEffect } from "react";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";

import Nav from "../components/navigation";
import {
  fetchProjects,
  projectSelectors,
} from "../redux/features/projects/projectsSlice";
import { AppDispatch } from "../redux/store";
import { Project } from "@/app/api/interfaces/index";
// import handler from "@/api/route";

export default function Home() {
  // const currentNumber = useSelector(
  //   (state: RootState) => state.projects.entities
  // );
  const dispatch = useDispatch<AppDispatch>();
  const total: number = useSelector(projectSelectors.selectTotal);
  const allProjects: Project[] = useSelector(projectSelectors.selectAll);
  console.log({
    total,
    allProjects,
  });

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Nav />
      <h1>Hi, Im Louis. A Software Engineer</h1>

      {allProjects.forEach((data) => {
        console.log(data);
      })}
    </main>
  );
}
