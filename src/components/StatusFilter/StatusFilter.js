import { Button } from "components/Button/Button";
import { toggleFilter } from "redux/filters/filtersSlice";
import { useDispatch } from "react-redux";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <Button onClick={() => dispatch(toggleFilter("all"))}>All</Button>
      <Button onClick={() => dispatch(toggleFilter("active"))}>Active</Button>
      <Button onClick={() => dispatch(toggleFilter("completed"))}>Completed</Button>
    </div>
  );
};
