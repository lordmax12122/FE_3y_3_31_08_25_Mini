import { Task } from "components/Task/Task";
import getVisibleTodos from "redux/filters/filterSelector";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
// import { getTodos } from "../../redux/todos/todosSelector";

export const TaskList = () => {
  const todos = useSelector(getVisibleTodos);
  console.log(todos)
  // const tasks = useSelector(getTodos);
  return (
    <ul className={css.list}>
      {todos.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
