import { ChangeEvent, FormEvent, useState } from "react";

interface TaskI {
  id: number;
  body: string;
}

export function Todo() {
  const [allTasks, setAllTasks] = useState<TaskI[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setNewTask(value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const taskToAdd: TaskI = {
      id: Math.random(),
      body: newTask.trim(),
    };

    if (taskToAdd.body) {
      setAllTasks((prevState) => [...prevState, taskToAdd]);
    }

    setNewTask("");
  }

  function handleDelete(id: number) {
    setAllTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  return (
    <div id="todo">
      <h2>Todo</h2>
      <ul>
        {allTasks.map((task) => (
          <li key={task.id}>
            {task.body}
            <button onClick={() => handleDelete(task.id)}>X</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Do laundry..."
        />
        <button type="submit">New Task</button>
      </form>
    </div>
  );
}
