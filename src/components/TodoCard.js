import React from "react";
import { useDispatch } from "react-redux";
import {
  activateTaskAgain,
  markTaskCompleted,
  removeTask,
} from "../redux/slices/todoListSlice";
import "./TodoCard.css";

const TodoCard = (props) => {
  const {
    id,
    title,
    description,
    date,
    assignedTo,
    duration,
    priority,
    isCompleted,
  } = props.content;

  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch(removeTask(id));
  };

  const markAsCompleted = () => {
    dispatch(markTaskCompleted(id));
  };

  const activateTask = () => {
    dispatch(activateTaskAgain(id));
  };

  return (
    <div
      className="card"
      style={{
        backgroundColor: isCompleted ? "lightgrey" : "lightblue",
      }}
    >
      <h3 className="card-title">Title : {title}</h3>
      <p className="card-description">Description : {description}</p>
      <span className="assigned-to">Assigned to : {assignedTo}</span>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              backgroundColor:
                priority === "high"
                  ? "red"
                  : priority === "low"
                  ? "yellow"
                  : "green",
              padding: "0.5rem",
              borderRadius: "0.75rem",
            }}
          >
            Priority : {priority}
          </p>
        </div>
        <div>
          <p className="task-duration"> Days given : {duration}</p>
        </div>
      </div>
      <div className="card-buttons">
        <button
          type="button"
          onClick={isCompleted ? activateTask : markAsCompleted}
        >
          {" "}
          {isCompleted ? "Activate again" : "Mark as completed"}
        </button>
        <button type="button" onClick={deleteTask}>
          Delete Task
        </button>
      </div>
    </div>
  );
};
export default TodoCard;
