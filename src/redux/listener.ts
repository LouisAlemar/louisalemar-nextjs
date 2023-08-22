import { createListenerMiddleware } from "@reduxjs/toolkit";

import { setAllProjects } from "./features/projects/projectsSlice";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: setAllProjects,
  effect: async (action, listenerApi) => {},
});

export default listenerMiddleware;
