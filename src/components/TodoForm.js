import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/todoListSlice";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("low");
  const [duration, setDuration] = useState("");

  const dispatch = useDispatch();

  const addTaskHandler = () => {
    if (date === "") {
      const date = new Date();
      const year = date.getFullYear();
      const day = date.getDay();
      const month = date.getMonth() + 1;
      setDate(`${day}/${month}/${year}`);
    }
    dispatch(
      addTask({
        id: Date.now(),
        title,
        description,
        assignedTo,
        date,
        priority,
        duration,
      })
    );
    setTitle("");
    setDescription("");
    setAssignedTo("");
    setDate("");
    setPriority("low");
    setDuration("");
  };

  return (
    <section className="form-container">
      <section className="section-1">
        <div className="title">
          <label>Task Title</label>
          <input
            type="text"
            id="task-title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="description">
          <label>Description</label>
          <textarea
            type="text"
            id="task-description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
      </section>
      <section className="section-2">
        <div>
          <label>Assigned To</label>
          <input
            type="text"
            id="task-assigned-to"
            value={assignedTo}
            onChange={(e) => {
              setAssignedTo(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Task Start Date</label>
          <input
            type="date"
            id="task-start-date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Task Duration</label>
          <input
            type="number"
            id="task-duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div>
          <label>Priority</label>
          <select
            id="task-priority"
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
            }}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </section>
      <button type="button" className="add-task-btn" onClick={addTaskHandler}>
        Add Task
      </button>
    </section>
  );
};
export default TodoForm;
