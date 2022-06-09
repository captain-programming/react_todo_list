import React from 'react'
import TodoItem from './TodoItem'


const TodoList = ({todo}) => {
    
  return (
    <div>
         <TodoItem todo={todo}/>
    </div>
  )
}

export default TodoList