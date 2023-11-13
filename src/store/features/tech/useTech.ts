import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { selectAll, getTech } from "./techSlice";

const useTech = () => {
  const _tech = useSelector(selectAll);
  const dispatch = useDispatch<AppDispatch>();

  const _fetchTech = useCallback(() => {
    dispatch(getTech());
  }, [dispatch]);

  return {
    tech: _tech,
    fetchTech: _fetchTech,
  };
};

export default useTech;
