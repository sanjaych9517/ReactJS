import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems"
import "./App.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go To College",
      dueDate: "4/10/2023",
    },
     {
      name: "Like This video",
      dueDate: "Right Now",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log();
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem = {handleNewItem}/>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
