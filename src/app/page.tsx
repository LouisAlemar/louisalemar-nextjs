"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Nav from "../components/navigation";
import { fetchProjects } from "../redux/features/projects/projectsSlice";
import { AppDispatch } from "../redux/store";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Nav />
      <h1>Hi, Im Louis. A Software Engineer</h1>
    </main>
  );
}
