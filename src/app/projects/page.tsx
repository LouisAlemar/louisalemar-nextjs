"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Nav from "../../components/navigation";

import { fetchProjects } from "../../redux/features/projects/projectsSlice";
import { AppDispatch } from "../../redux/store";
// import projects from "../pages/api/projects/projects.json";

export default function Home() {
  // const currentNumber = useSelector((state: RootState) => state.projects.value);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProjects());
    // dispatch(fetchProjects(projects));
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Nav />
      <h1>Projects</h1>
      {/* <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button> */}
      {/* <h1>{currentNumber}</h1> */}
    </main>
  );
}
