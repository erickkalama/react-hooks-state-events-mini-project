import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskInput, setTaskInput] = useState({
    text: "",
    category: categories.length > 0 ? categories[0] : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskInput((prevTaskInput) => ({
      ...prevTaskInput,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(taskInput);
    setTaskInput({
      text: "",
      category: categories.length > 0 ? categories[0] : ""
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskInput.text}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskInput.category}
          onChange={handleChange}
          required
        >
          {categories
            .filter(category => category !== "All")
            .map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
