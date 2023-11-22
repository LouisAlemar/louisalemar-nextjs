"use client";

import Nav from "@/components/nav";
import { Provider } from "react-redux";
import { store } from "./store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Nav />
      {children}
    </Provider>
  );
}
