import React from "react";

function Task({ text, category, onDeleteTask }) {
  const handleDelete = () => {
    onDeleteTask(text);
    console.log(`Deleting task: ${text}`);
    // Implement task deletion logic here if needed
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
