import React from "react";
import { useState } from "react";
import { Form } from "./components/Form";
import { Task } from "./components/Task";

export const App = () => {
  const [task, setTask] = useState([
    { id: 1, name: "1", des: "A", date: "12/02/2022" },
    { id: 2, name: "2", des: "B", date: "12/03/2022" },
  ]);

  // newTask = {taskName: "", description: "", date: "" }

  function handleSubmit(newTask) {
    setTask([...task, { ...newTask, id: task[task.length - 1].id + 1 }]);
  }

  function handleDelete(id) {
    setTask([...task.filter((el) => el.id !== id)]);
  }

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <Task task={task} handleDelete={handleDelete} />
    </>
  );
};
