import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskLists";
import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        task: task.title,
        description: task.description,
      },
    ]);
  };

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
};

export default App;
