import React, { useState } from 'react';
import { CATEGORIES, TASKS } from "../data";
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // State to manage tasks and selected category
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle task deletion
  function handleDeleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  // Function to handle category selection
  function handleSelectCategory(category) {
    setSelectedCategory(category);
  }

  // Function to handle adding a new task
  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Filter tasks based on selected category
  const visibleTasks = tasks.filter(task =>
    selectedCategory === "All" || task.category === selectedCategory
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onSelectCategory={handleSelectCategory} 
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(cat => cat !== "All")} 
        onTaskFormSubmit={handleTaskFormSubmit} 
      />
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
