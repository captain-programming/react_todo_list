import React from 'react'
import { useState } from 'react'
import styles from "./todo.module.css"

const TodoItem = (todo) => {
    const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
    // console.log(todo);
  return (
    <div className={styles.list} key={todo.todo.id}>
            <div>{todo.todo.value}</div>
            <input type="radio" className={styles.radio} checked={isCompleted} onChange={(e) => {
                setIsCompleted(e.target.checked);
            }}/>
            
            {/* <button onClick={()=> onDelete(todo.id)}>Delete</button> */}
    </div>
  )
}

export default TodoItem