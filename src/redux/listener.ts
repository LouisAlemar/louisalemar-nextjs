import { createListenerMiddleware } from "@reduxjs/toolkit";

import { getPortfolioItems } from "@/redux/features/portfolio/portfolioSlice";
import { getJobs } from "@/redux/features/projects/projectsSlice";
import { getTech } from "@/redux/features/tech/techSlice";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: getPortfolioItems,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(getJobs());
    listenerApi.dispatch(getTech());
  },
});

export default listenerMiddleware;
