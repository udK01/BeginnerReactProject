import Button from "./Button";
import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([
    `Eat Breakfast`,
    `Take a shower`,
    `Walk the dog`,
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {}

  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <Button btnText={"Add"} className={"add-button"} function={addTask} />
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <Button
              btnText={"Delete"}
              className={"delete-button"}
              function={() => deleteTask(index)}
            />
            <Button
              btnText={"☝"}
              className={"move-button"}
              function={() => moveTaskUp(index)}
            />
            <Button
              btnText={"👇"}
              className={"move-button"}
              function={() => moveTaskDown(index)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
