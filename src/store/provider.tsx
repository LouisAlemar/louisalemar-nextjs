"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import Nav from "@/components/nav";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Nav />
      {children}
    </Provider>
  );
}