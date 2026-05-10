import { AppBar } from "components/AppBar/AppBar";
import { Layout } from "components/Layout/Layout";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "redux/todos/todosOperations";

export const App = () => {
  // const [wether, setWether] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
