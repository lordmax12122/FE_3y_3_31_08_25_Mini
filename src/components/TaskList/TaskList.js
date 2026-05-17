import { Task } from "components/Task/Task";
import { useSelector } from "react-redux";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
// import { getTodos } from "../../redux/todos/todosSelector";

export const TaskList = () => {
  const tasks = useSelector(state => state.todos.todos);
  console.log(tasks.todos);
  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
