function TaskCard({ task }) {
  return (
    <section>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </section>
  );
}

export default TaskCard;
