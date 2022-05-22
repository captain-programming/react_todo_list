import React from 'react'
import { useState } from 'react'
import styles from "./todo.module.css"

const TodoList = ({todo, onDelete}) => {
    const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  return (
    
    <div className={styles.list} key={todo.id}>
            <div>{todo.value}</div>
            <input type="radio" className={styles.radio} checked={isCompleted} onChange={(e) => {
                setIsCompleted(e.target.checked);
            }}/>
            
            {/* <button onClick={()=> onDelete(todo.id)}>Delete</button> */}
    </div>
  )
}

export default TodoList