import TaskCard from "./TaskCard";

function TaskLists({tasks}) {

  if (tasks.length === 0) {
    return <h1>No hay Tareas pendientes</h1>;
  }
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} tasks={task}/>
      ))}
    </>
  );
}

export default TaskLists;
