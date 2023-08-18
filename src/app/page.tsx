"use client";

import Nav from "../components/navigation";
import { increment, decrement, reset } from "../redux/features/portfolioSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";

export default function Home() {
  const currentNumber = useSelector(
    (state: RootState) => state.portfolio.value
  );
  const dispatch = useDispatch();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Nav />
      <h1>Hi, I&apos;m Louis. A Web Developer</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <h1>{currentNumber}</h1>
    </main>
  );
}
