import { createListenerMiddleware } from "@reduxjs/toolkit";

import { getPortfolioItems } from "@/store/features/portfolio/portfolioSlice";
import { getJobs } from "@/store/features/projects/projectsSlice";
import { getTech } from "@/store/features/tech/techSlice";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: getPortfolioItems,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(getJobs());
    listenerApi.dispatch(getTech());
  },
});

export default listenerMiddleware;
