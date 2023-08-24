import { createListenerMiddleware } from "@reduxjs/toolkit";

import {
  getEverything,
  getJobs,
} from "@/redux/features/projects/projectsSlice";
import { getTech } from "@/redux/features/tech/techSlice";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: getEverything,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(getJobs());
    listenerApi.dispatch(getTech());
  },
});

export default listenerMiddleware;
