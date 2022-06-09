import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import styles from "./todo.module.css"

const Todo = () =>{
   const [newTodo, setTodo] = useState("ABCD");
   const [todos, setTodos] = useState([]);
   

  //  const onDelete = (id) =>{
  //      let newTodos =todos.filter(todo => todo.id !== id);
  //      setTodos(newTodos);
  //  }

//    const handleChange = (e)=> {
//        setTodo(e.target.value);
//    };
   return (
       <div className="todoList">
            <div><h1>TodoList</h1></div> 
            <div>
                    {todos.map((todo) =>(
                        <TodoList key={todo.id} todo={todo}/>
                    ))}
            </div>
            <div>
              <input className={styles.input} placeholder="Writing something here" value={newTodo} onChange={(e)=> {
                setTodo(e.target.value);
                }}
              />
              <button className={styles.button} onClick={() => {
                 setTodos([...todos, { id: Date.now(), value: newTodo }]);
                 setTodo("");
                }}> &#x2B;</button>
          </div>
       </div>
   );
};

export default Todo;